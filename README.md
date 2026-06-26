# Thamana Solutions — Frontend Rebuild

This project is a clean, modern, and production-ready rebuild of the Thamana Solutions website. It was built from scratch using React, Vite, and Tailwind CSS, strictly adhering to a static frontend architecture.

## 🏗 Architecture & Technologies

- **Framework:** React 19
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 4
- **Routing:** Wouter
- **Data Handling:** Hardcoded mock data inside `client/src/lib/data.ts`
- **Deployment:** Vercel-ready static build

### Folder Structure

```
project/
  client/
    public/       # Small configuration files ONLY (favicon.ico, robots.txt). DO NOT put images/media here.
    src/
      pages/      # Page-level components
      components/ # Reusable UI & shadcn/ui
      contexts/   # React contexts
      hooks/      # Custom React hooks
      lib/        # Static data and shared utilities
      App.tsx     # Routes & top-level layout
      main.tsx    # React entry point
      index.css   # global style
  tailwind.config.js # Tailwind CSS configuration
  vite.config.ts     # Vite configuration
  package.json       # Dependencies and scripts
  postcss.config.js  # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository and navigate to the project folder.
2. Install the dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the local development server:
```bash
pnpm dev
```
The application will be available at `http://localhost:3000`.

### Production Build

Create a production-ready static build:
```bash
pnpm build
```
This command generates a `dist` folder containing the optimized HTML, JS, and CSS files.

## ☁️ Deployment (Vercel)

This project is fully configured to be deployed on Vercel as a static site.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel will automatically detect the **Vite** framework.
5. Ensure the following settings:
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
6. Click **Deploy**.

## 🎨 Key Features Implemented

- **Dark/Light Mode:** Fully functional theme toggling system using Tailwind CSS and a custom `useTheme` hook.
- **Responsive Design:** Fluid layouts that adapt seamlessly from mobile devices to large desktop screens.
- **3D Animations:** The rotating wireframe cube in the hero section is built using pure CSS 3D transforms (`preserve-3d`).
- **Scroll Animations:** Smooth fade-in animations as elements enter the viewport, managed by a custom `IntersectionObserver` hook.
- **Clean Component Boundaries:** UI elements like Service Cards and Team Cards are isolated into reusable components.
- **Static Data:** All content is cleanly separated into `client/src/lib/data.ts` for easy maintenance without a CMS.
