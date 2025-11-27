# Keita Louis-Alexandre Resume

Single-page CV site built with React, Vite, and Tailwind (via CDN). The content is driven by a single data file so you can quickly adjust contact info, experience, and skills.

## Tech Stack
- React 19 + TypeScript
- Vite for local dev/build
- Tailwind CSS configured inline in `index.html`

## Project Structure
- `App.tsx`: Page shell that renders the resume layout.
- `constants.ts`: All resume data (contact, education, expertise, experience) and the profile image import.
- `components/Resume/*`: Sidebar, main content, timeline items, and profile header.
- `picture.jpeg`: Profile photo used in the header card.

## Run Locally
Prerequisite: Node.js 18+ and npm.

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open the URL printed in the terminal (defaults to `http://localhost:5173`).

## Build for Production
- Create a production bundle: `npm run build`
- Preview the built site locally: `npm run preview`

## Customization
- Update resume content in `constants.ts`.
- Replace the profile photo by swapping `picture.jpeg`.
- Adjust colors/typography in the Tailwind config block inside `index.html`.
