# Copilot Instructions for innovxyworks

## Project Overview
- This is a Next.js-based showcase website for a startup specializing in mobile and web app development.
- The architecture is modular: `src/components/ui` for base UI elements, `src/components/sections` for page sections, and `src/components/layout` for header/footer.
- Main pages and routing are in `src/app/` (see `layout.tsx`, `page.tsx`).
- Styles use Tailwind CSS, configured in `postcss.config.mjs` and `globals.css`.
- Utility functions are in `src/lib/utils.ts`.
- Public assets (images, icons) are in `public/`.

## Key Patterns & Conventions
- **Section Components:** Each major homepage section (Hero, Process, Pricing, FAQ, Contact) has a dedicated file in `src/components/sections/`.
- **UI Components:** Reusable UI elements (buttons, cards, forms) are in `src/components/ui/`.
- **Naming:** Use PascalCase for React components and file names.
- **Props:** Prefer explicit prop typing with TypeScript interfaces.
- **No Redux/MobX:** State is managed locally or via React context if needed.
- **API Routes:** Backend logic (e.g., email sending) is in `src/app/api/` (see `send-email/route.ts`).

## Developer Workflows
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Lint:** `npm run lint`
- **Format:** `npm run format` (if configured)
- **No custom test suite** is present by default.

## Integration & Data Flow
- **Contact Form:** Submits to `/api/send-email` (see `contact-form.tsx` and `send-email/route.ts`).
- **Calendar Booking:** Uses a custom calendar component (`calendar-booking.tsx`).
- **No database** is integrated by default; demo data is hardcoded in section components.
- **External services** (e.g., Stripe, Cal.com) are referenced in project examples but not included in this codebase.

## Project-Specific Advice
- **Follow the section/component structure** for new features.
- **Keep business logic in section components**; keep UI components presentational.
- **Do not introduce global state** unless necessary.
- **Use Tailwind utility classes** for styling; avoid custom CSS unless required.
- **Review `README.md`** for business context and section breakdowns.

## Example: Adding a New Section
1. Create a new file in `src/components/sections/` (e.g., `about.tsx`).
2. Export a React component with explicit props.
3. Import and use it in `src/app/page.tsx`.

---
For more context, see `README.md` and existing section/UI components.
