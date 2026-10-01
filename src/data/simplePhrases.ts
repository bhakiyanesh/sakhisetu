import type { LanguageCode } from './services'

export interface SimplePhraseRule {
  /** Formal government wording to look for. */
  pattern: string
  /** Plain replacement that keeps the original meaning. */
  replacement: string
}

/**
 * Government wording → everyday wording.
 * Rules are applied in order, so put longer, more specific phrases first.
 * Only the register changes — the legal meaning stays the same.
 */
export const simplePhraseRules: Record<LanguageCode, SimplePhraseRule[]> = {
  en: [
    { pattern: 'applicant shall furnish', replacement: 'you need to provide' },
    { pattern: 'the applicant shall', replacement: 'you need to' },
    { pattern: 'shall be required to', replacement: 'need to' },
    { pattern: 'shall not be entitled to', replacement: 'will not get' },
    { pattern: 'shall be entitled to', replacement: 'can' },
    { pattern: 'is hereby informed', replacement: 'is told' },
    { pattern: 'required to submit', replacement: 'must give' },
    { pattern: 'to submit', replacement: 'to give' },
    { pattern: 'is eligible for', replacement: 'can get' },
    { pattern: 'shall be eligible', replacement: 'can get' },
    { pattern: 'eligibility criteria', replacement: 'who can get this' },
    { pattern: 'in the event that', replacement: 'if' },
    { pattern: 'in the event of', replacement: 'if there is' },
    { pattern: 'as the case may be', replacement: 'whichever applies' },
    { pattern: 'at the earliest', replacement: 'as soon as possible' },
    { pattern: 'with effect from', replacement: 'starting from' },
    { pattern: 'on or before', replacement: 'by' },
    { pattern: 'notwithstanding', replacement: 'even if' },
    { pattern: 'provided that', replacement: 'but' },
    { pattern: 'duly attested', replacement: 'signed and stamped' },
    { pattern: 'self-attested', replacement: 'signed by you' },
    { pattern: 'in respect of', replacement: 'about' },
    { pattern: 'with regard to', replacement: 'about' },
    { pattern: 'in lieu of', replacement: 'instead of' },
    { pattern: 'aforementioned', replacement: 'mentioned above' },
    { pattern: 'aforesaid', replacement: 'mentioned above' },
    { pattern: 'subsequent to', replacement: 'after' },
    { pattern: 'prior to', replacement: 'before' },
    { pattern: 'annexure', replacement: 'attachment' },
    { pattern: 'deemed to be', replacement: 'counted as' },
    { pattern: 'per annum', replacement: 'per year' },
    { pattern: 'in order to', replacement: 'to' },
    { pattern: 'applicant', replacement: 'you' },
    { pattern: 'furnish', replacement: 'provide' },
    { pattern: 'herein', replacement: 'here' },
    { pattern: 'hereby', replacement: 'by this' },
  ],
  ta: [
    { pattern: 'விண்ணப்பதாரர் வழங்க வேண்டும்', replacement: 'நீங்கள் கொடுக்க வேண்டும்' },
    { pattern: 'விண்ணப்பதாரர்', replacement: 'நீங்கள்' },
    { pattern: 'சமர்ப்பிக்க வேண்டும்', replacement: 'கொடுக்க வேண்டும்' },
    { pattern: 'வழங்க வேண்டும்', replacement: 'கொடுக்க வேண்டும்' },
    { pattern: 'மேற்கூறிய', replacement: 'மேலே சொன்ன' },
    { pattern: 'தகுதியுடையவர்', replacement: 'தகுதி உள்ளவர்' },
    { pattern: 'தேவைப்படுகிறது', replacement: 'தேவை' },
    { pattern: 'எனினும்', replacement: 'ஆனாலும்' },
    { pattern: 'முன்னதாக', replacement: 'முன்பு' },
    { pattern: 'பின்னதாக', replacement: 'பின்பு' },
  ],
  te: [
    { pattern: 'దరఖాస్తుదారు సమర్పించాలి', replacement: 'మీరు ఇవ్వాలి' },
    { pattern: 'దరఖాస్తుదారు', replacement: 'మీరు' },
    { pattern: 'సమర్పించాలి', replacement: 'ఇవ్వాలి' },
    { pattern: 'అందించాలి', replacement: 'ఇవ్వాలి' },
    { pattern: 'పైన పేర్కొన్న', replacement: 'పైన చెప్పిన' },
    { pattern: 'అర్హత కలిగిన', replacement: 'అర్హత ఉన్న' },
    { pattern: 'అయినప్పటికీ', replacement: 'అయినా' },
    { pattern: 'తప్పనిసరిగా', replacement: 'తప్పకుండా' },
    { pattern: 'ముందుగా', replacement: 'ముందు' },
  ],
  hi: [
    { pattern: 'आवेदक प्रस्तुत करना होगा', replacement: 'आपको देना होगा' },
    { pattern: 'आवेदक', replacement: 'आप' },
    { pattern: 'प्रस्तुत करना होगा', replacement: 'देना होगा' },
    { pattern: 'जमा करना होगा', replacement: 'देना होगा' },
    { pattern: 'उपरोक्त', replacement: 'ऊपर बताया गया' },
    { pattern: 'पात्र होगा', replacement: 'मिल सकता है' },
    { pattern: 'तत्पश्चात', replacement: 'उसके बाद' },
    { pattern: 'इसके पूर्व', replacement: 'इससे पहले' },
    { pattern: 'अनिवार्यतः', replacement: 'ज़रूरी है' },
    { pattern: 'के अनुसार', replacement: 'के मुताबिक' },
  ],
}

/** Simplifies common formal phrases without changing their conditions or obligations. */
export function simplifyGovernmentWording(text: string, language: LanguageCode): string {
  return simplePhraseRules[language].reduce(
    (result, rule) => result.replace(new RegExp(rule.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), rule.replacement),
    text,
  )
}
