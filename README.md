# SakhiSetu

SakhiSetu helps women find and understand trusted public services through a simple multilingual resource navigator and guided e-Shram workflow. People can browse seven everyday needs: Money & Benefits, Jobs & Employment, Learning & Skills, Women Support, Business & Self-Employment, Safety & Support, and Government Services.

## What it does

- One shared flow rendered in Tamil, Telugu, Hindi, and English.
- Voice input with language-aware recognition and a typing fallback.
- Local intent and resource matching, with optional Gemini intent classification.
- Simple explanations, glossary help, read aloud, repeat, and step-by-step e-Shram guidance.
- Curated official resource links and handoff to the official service for applications.
- Sensitive identifiers are blocked before intent requests; SakhiSetu does not store user messages.

Gemini can suggest a category only. The app validates that category against the local resource catalog and never accepts URLs or actions from the model. If Gemini is missing or unavailable, local matching remains usable.

## Run locally

```sh
npm install
npm run dev
```

The Vite development server supports the local resource fallback. Vercel's `/api/intent` function is used for Gemini in deployments.

## Environment

| Variable | Where | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Vercel server environment | Server-only Gemini credential; never prefix with `VITE_` |
| `VITE_GEMINI_ENABLED` | Vercel build environment | Set to `true` to enable the same-origin intent function |

Without these variables, the application uses deterministic local intent matching. Never commit `.env` files or secrets.

## Build and deployment

```sh
npm run build
npm run preview
```

Vite writes the static app to `dist/`. Vercel can build this repository with `npm run build` and serve `dist/`; its Node function in `api/intent.js` provides optional Gemini intent classification. Set the two environment variables above in the Vercel project settings. Test the deployment without a Gemini key first to confirm local fallback remains available.

## Technology

React, TypeScript, Vite, CSS, Web Speech APIs, and an optional Vercel serverless function for Gemini. Curated resource data and the e-Shram workflow remain in the client so core browsing does not depend on network access.

## Future work

The current architecture leaves room for assisted website reading, translation, page simplification, and vision features. These are not enabled in this prototype; official application steps remain on the linked government websites.
