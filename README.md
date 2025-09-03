# Developer-Focused Project Documentation

This repository is a Next.js application implemented in TypeScript, providing server-side rendering and a structured approach to building modern web solutions. Below is a concise overview aimed at developers looking to navigate, modify, and extend the codebase effectively.

---

## Requirements

• Node.js v16+  
• NPM v8+ (or an alternative like Yarn)  

Before proceeding, ensure your local environment meets these requirements.

---

## Project Setup

1. **Install Dependencies**  
   ```
   npm install
   ```
2. **Development Server**  
   ```
   npm run dev
   ```  
   By default, this will serve your app on [http://localhost:3000](http://localhost:3000).

3. **Production Build**  
   ```
   npm run build
   npm run start
   ```  
   Creates an optimized build and starts the production server.

---

## Directory Structure

```
.
├─ .deployment
├─ .gitignore
├─ cors.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tsconfig.json
├─ .vscode/        # VS Code settings (launch configurations, etc.)
├─ public/         # Static assets, images, and icons
└─ src/            # Main application code
   ├─ components/
   │  ├─ auth/
   │  ├─ home/
   │  ├─ layout/
   │  └─ ui/
   ├─ context/
   ├─ data/
   ├─ lib/
   ├─ pages/
   └─ styles/
```

### Key Files

• [`next.config.ts`](next.config.ts:1): Custom Next.js configuration (e.g., webpack modifications, environment settings).  
• [`tsconfig.json`](tsconfig.json:1): TypeScript compiler configuration.  
• [`.vscode/`](.vscode:1): Editor-specific settings (recommended extensions, debug configs).

---

## Source Code (src/)

### 1. Components

• [`auth`](src/components/auth:1): Contains [withAuth.tsx](src/components/auth/withAuth.tsx:1), a Higher-Order Component enforcing authentication on protected pages or components.  
• [`home`](src/components/home:1): Sections used by the homepage (Hero, Services, Contact, etc.).  
• [`layout`](src/components/layout:1): Shared layout elements (Navbar, Footer, Promo banners), applied site-wide.  
• [`ui`](src/components/ui:1): Reusable UI primitives like [Button.tsx](src/components/ui/Button.tsx:1) and [Section.tsx](src/components/ui/Section.tsx:1).

### 2. Context

• [`AuthContext.tsx`](src/context/AuthContext.tsx:1): Global state that manages user authentication and session details.

### 3. Data

• JSON files such as [`assessment.json`](src/data/assessment.json:1) and [`posts.json`](src/data/posts.json:1) for static data.

### 4. Lib

• [`auth.ts`](src/lib/auth.ts:1): Client-side authentication helpers.  
• [`blog.server.ts`](src/lib/blog.server.ts:1): Server-side blog utilities.  
• [`blog.ts`](src/lib/blog.ts:1): Client-side blog interactions.

### 5. Pages

Next.js auto-routes based on filenames:

• [`_app.tsx`](src/pages/_app.tsx:1), [`_document.tsx`](src/pages/_document.tsx:1): Custom overrides for Next.js app behavior and document structure.  
• Main pages: [`about.tsx`](src/pages/about.tsx:1), [`case-studies.tsx`](src/pages/case-studies.tsx:1), [`contact.tsx`](src/pages/contact.tsx:1), [`digital-assessment.tsx`](src/pages/digital-assessment.tsx:1), [`index.tsx`](src/pages/index.tsx:1), [`services.tsx`](src/pages/services.tsx:1).  
• Admin panel for blog: [`admin/blog`](src/pages/admin/blog:1).  
• API routes under [`api`](src/pages/api:1) (e.g., [`contact.ts`](src/pages/api/contact.ts:1), [`leads.ts`](src/pages/api/leads.ts:1), etc.).  
• Authentication pages ([`signin.tsx`](src/pages/auth/signin.tsx:1), [`signup.tsx`](src/pages/auth/signup.tsx:1)).  
• Blog pages ([`[slug].tsx`](src/pages/blog/[slug].tsx:1)).

### 6. Styles

• [`globals.css`](src/styles/globals.css:1): Global styles loaded at the top level.

---

## Environment Variables

• Stored in [`.env.local`](.env.local:1). Be sure to specify relevant keys for local development, like database credentials or API tokens.

---

## Coding Guidelines

• **Linting**: Configured in [`eslint.config.mjs`](eslint.config.mjs:1) for consistent coding style.  
• **TypeScript**: Follow strict typing guidelines enforced by [`tsconfig.json`](tsconfig.json:1).  
• **Commit Messages**: Use concise, descriptive commit messages referencing relevant issues or tasks when appropriate.

---

## Deployment

• Build artifacts are generated via `npm run build`.  
• Ensure environment variables are correctly set (matching `.env.local` or your deployment provider’s configuration).  
• Launch the production server with `npm run start` after a successful build.

---

## Contributing

1. **Fork** or **branch** off the main repository.  
2. Update or add tests (if applicable).  
3. Submit a **Pull Request** explaining your changes.

This documentation aims to provide a quick, technical reference for developers to jump in and contribute effectively. For additional clarifications, refer to inline comments within the source files or open an issue on the repository.