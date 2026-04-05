# Mobile Application — Mobile App Landing Page

A fully static marketing landing page for the **Mobile Application** mobile productivity app. Built with Next.js, React, Tailwind CSS, and shadcn/ui.

---

## Tech Stack

| Layer              | Technology                      |
| ------------------ | ------------------------------- |
| Framework          | Next.js 15 (static export)      |
| Language           | TypeScript 5                    |
| Frontend           | React 19                        |
| Styling            | Tailwind CSS 4                  |
| UI components      | shadcn/ui (Radix UI primitives) |
| Animations         | Framer Motion                   |
| Icons              | Lucide React, React Icons       |
| Forms & validation | React Hook Form + Zod           |
| Package manager    | pnpm                            |

---

## Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles & Tailwind CSS variables
│   ├── layout.tsx        # Root layout (metadata, fonts)
│   ├── page.tsx          # Home / landing page
│   └── not-found.tsx     # 404 page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx    # Fixed navigation bar
│   │   └── footer.tsx    # Footer
│   └── ui/               # shadcn/ui component library
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Utility helpers (cn)
├── public/
│   └── images/           # App mockup and lifestyle images
├── next.config.mjs       # Next.js config (output: export)
├── postcss.config.mjs    # PostCSS + Tailwind v4
└── tsconfig.json
```
