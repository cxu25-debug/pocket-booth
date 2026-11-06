# Pocket Booth

November 6, 2026 · Prototyping for Masters · Option 1

A phone-first photo booth: four little moments, one keepsake. Warm paper, sage green and a burnt-orange shutter give the experience the feel of a tiny analog booth.

## Features
- Front-facing, mirrored camera preview with a centered 4:3 photo crop.
- A 3–2–1 countdown before each of four photos, with a white shutter flash.
- Original, Monochrome, Golden and Dreamy filters, applied to the saved photos.
- Four-frame vertical PNG photo strip with cream, rose, sage or blue borders.
- Native file sharing on supported phones and PNG download on desktop.
- Retake flow; friendly camera permission and unavailable-camera guidance.
- Standalone PWA manifest, 512px icons, iOS icon and safe-area padding.
- Explicit sample mode to explore the complete flow without camera permission.
- Photos are processed locally and never uploaded. Camera stops after a session.

## Run
Install Node.js 20.9+ and pnpm, then:

```sh
pnpm install
pnpm dev --port 3006
```

Open http://localhost:3006 on the computer. Camera access on a phone requires the deployed HTTPS URL; a plain LAN IP address does not provide a secure camera context.

## Deploy
Create a public repository named `pocket-booth`, push this folder, and import that repository into Vercel. Select the Next.js framework preset. No environment variables or database are required.

## Install on a phone
- iPhone: open the HTTPS URL in Safari → Share → Add to Home Screen → enable Open as Web App → Add.
- Android: open the HTTPS URL in Chrome → menu → Install app or Add to Home screen.

## Validation
Production build; browser sample flow through four countdowns, strip generation, border change, desktop download and retake. Physical-device camera permission, native share sheet and home-screen installation require a real phone check.

## Short project description
Pocket Booth turns an everyday phone into a small analog-inspired photo booth. Four timed frames become a personalized photo strip. I focused on a simple capture-to-keepsake interaction, warm colors and typography, and local photo processing to make spontaneous moments feel easy and private.
