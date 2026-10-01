const languages = new Set(['ta', 'te', 'hi', 'en'])
const categories = ['money', 'jobs', 'learning', 'women', 'business', 'safety', 'government']
const requestWindows = new Map()
const RATE_WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 20

function containsSensitiveData(value) {
  return /\b(aadhaar|aadhar|otp|one[- ]time password|password|passcode|pin|bank account|bank details|account number|credit card|debit card|card number|cvv|upi pin)\b|ஆதார்|ఆధార్|आधार|கடவுச்சொல்|పాస్‌వర్డ్|पासवर्ड|வங்கி கணக்கு|బ్యాంక్ ఖాతా|बैंक खाता|அட்டை எண்|कार्ड नंबर|కార్డు నంబర్/iu.test(value)
    || /(?:^|\D)(?:\d[\s-]*){11}\d(?:\D|$)/.test(value)
    || /(?:^|\D)(?:\d[\s-]*){15}\d(?:\D|$)/.test(value)
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { message, language } = request.body ?? {}
  if (typeof message !== 'string' || !message.trim() || message.length > 1200 || !languages.has(language)) {
    return response.status(400).json({ error: 'Invalid request' })
  }
  if (containsSensitiveData(message)) {
    return response.status(422).json({ error: 'Sensitive information is not accepted' })
  }
  const clientAddress = String(request.headers['x-forwarded-for'] ?? 'unknown').split(',')[0].trim()
  const now = Date.now()
  const priorWindow = requestWindows.get(clientAddress)
  const activeWindow = priorWindow && now - priorWindow.startedAt < RATE_WINDOW_MS
    ? priorWindow
    : { startedAt: now, count: 0 }
  activeWindow.count += 1
  requestWindows.set(clientAddress, activeWindow)
  if (activeWindow.count > MAX_REQUESTS_PER_WINDOW) {
    return response.status(429).json({ error: 'Intent service unavailable' })
  }
  if (!process.env.GEMINI_API_KEY) {
    return response.status(503).json({ error: 'Intent service unavailable' })
  }

  try {
    const result = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Classify this help request for a women's government resource navigator. Respond only as JSON with one property, category, set to one of ${categories.join(', ')} or unclear. User language: ${language}. Request: ${message}` }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'OBJECT',
            properties: { category: { type: 'STRING', enum: [...categories, 'unclear'] } },
            required: ['category'],
          },
        },
      }),
      signal: AbortSignal.timeout(5000),
    })
    if (!result.ok) return response.status(503).json({ error: 'Intent service unavailable' })

    const data = await result.json()
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (typeof content !== 'string') return response.status(502).json({ error: 'Intent service unavailable' })
    const structured = JSON.parse(content)
    if (typeof structured.category !== 'string' || ![...categories, 'unclear'].includes(structured.category)) {
      return response.status(502).json({ error: 'Intent service unavailable' })
    }
    return response.status(200).json({ category: categories.includes(structured.category) ? structured.category : null })
  } catch {
    return response.status(503).json({ error: 'Intent service unavailable' })
  }
}
