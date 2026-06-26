# Thamana Solutions Frontend Rebuild

This project is a complete rebuild of the Thamana Solutions website as a production-grade static frontend application. It leverages modern web technologies to deliver a clean, maintainable, and performant user experience.

## Technologies Used

*   **React 18**: A JavaScript library for building user interfaces.
*   **Vite 5**: A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS 3**: A utility-first CSS framework for rapidly building custom designs.
*   **TypeScript**: A superset of JavaScript that adds static typing to the language.
*   **React Router DOM 6**: For client-side routing.

## Project Structure

The project follows a standard Vite and React application structure, organized for clarity and maintainability:

```
thamana-clean/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/             # Static assets like images, icons (if not uploaded to CDN)
│   ├── components/         # Reusable UI components (e.g., Navbar, Footer, ServiceCard)
│   ├── hooks/              # Custom React hooks for reusable logic (e.g., useIntersectionObserver)
│   ├── lib/                # Utility functions and static data (e.g., data.ts, utils.ts)
│   ├── pages/              # Page-level components (e.g., Home.tsx)
│   ├── App.tsx             # Main application component, handles routing
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.tsx            # React entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Folder-by-Folder Explanation

*   **`public/`**: Contains static assets that are served directly by the web server. For this project, it currently holds `vite.svg`. In a real-world scenario, larger images or media would be uploaded to a CDN and referenced via URLs.
*   **`src/`**: The core source code of the React application.
    *   **`assets/`**: Intended for smaller, project-specific static assets that are not uploaded to a CDN. Currently empty as images are referenced directly from Unsplash or will be uploaded to a CDN.
    *   **`components/`**: Houses all reusable React components that are not tied to a specific page. Examples include `Navbar`, `Footer`, `ServiceCard`, `TeamCard`, `ServiceModal`, and `WireframeCube`.
    *   **`hooks/`**: Contains custom React hooks to encapsulate reusable stateful logic. `useIntersectionObserver` is an example used for scroll-based animations.
    *   **`lib/`**: Stores utility functions (`utils.ts`) and static data (`data.ts`) that are shared across the application. `data.ts` holds all the content for services, team members, and company information.
    *   **`pages/`**: Contains components that represent distinct pages of the application. `Home.tsx` is the main landing page.
    *   **`App.tsx`**: The root component of the React application. It sets up the main layout and handles routing (though for this single-page app, it primarily renders the `Home` component).
    *   **`index.css`**: The main CSS file that imports Tailwind CSS, defines global styles, custom utility classes, and keyframe animations.
    *   **`main.tsx`**: The entry point of the React application, responsible for rendering the `App` component into the DOM.
*   **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
*   **`index.html`**: The main HTML file that serves as the entry point for the web application.
*   **`package.json`**: Defines project metadata, scripts, and dependencies.
*   **`postcss.config.js`**: Configuration for PostCSS, used by Tailwind CSS.
*   **`tailwind.config.js`**: Tailwind CSS configuration file, where custom themes, colors, and plugins are defined.
*   **`tsconfig.json`**: TypeScript configuration for the client-side code.
*   **`tsconfig.node.json`**: TypeScript configuration specifically for Node.js environments (e.g., Vite configuration files).
*   **`vite.config.ts`**: Vite build tool configuration, including React plugin and path aliases.

## Component Architecture

The application is built with a component-based architecture, promoting reusability and modularity:

*   **`Navbar`**: Handles site navigation, logo display, and theme toggling (though theme toggling is currently a placeholder).
*   **`HeroSection` (integrated into `Home.tsx`)**: Displays the main heading, description, CTA, 3D cube, and key statistics.
*   **`ServiceCard`**: A reusable component to display individual service details, including an image, title, description, and a 
Learn More" button that triggers a modal.
*   **`ServiceModal`**: Displays detailed information about a selected service. It uses `createPortal` for better accessibility and z-index management.
*   **`TeamCard`**: Renders individual team member profiles with their image, name, title, bio, and social links.
*   **`Footer`**: Contains copyright information, navigation links, and social media links.
*   **`WireframeCube`**: An SVG-based component that renders the animated 3D wireframe cube in the hero section.
*   **`AnimatedSection` (Higher-Order Component/Utility)**: A wrapper component that applies a fade-in-up animation using `useIntersectionObserver` when the section enters the viewport.

## State Management Explanation

For this static frontend application, state management is kept simple and localized:

*   **React `useState` Hook**: Primarily used for managing UI-specific states, such as the mobile navigation menu (`Navbar`) and the visibility of the service detail modal (`Home` and `ServiceModal`).
*   **`selectedService` State**: In `Home.tsx`, `selectedService` stores the data of the service currently selected by the user, which is then passed to the `ServiceModal` component.
*   **`isModalOpen` State**: Also in `Home.tsx`, this boolean state controls the visibility of the `ServiceModal`.

Given the application's static nature and lack of complex global state requirements, a dedicated state management library (like Redux or Zustand) is not necessary, keeping the codebase lightweight and easy to understand.

## Asset Organization Strategy

To ensure optimal performance and adherence to static deployment best practices, a clear asset organization strategy is followed:

*   **`public/` Directory**: Reserved for small, configuration-related static files that need to be served directly at the root of the domain (e.g., `favicon.ico`, `robots.txt`). Currently, `vite.svg` is present here as a placeholder.
*   **`src/assets/` Directory**: Intended for minor, project-specific static assets that are bundled with the application. For this project, it remains largely unused as most visual assets are external.
*   **External Image Hosting (Unsplash/CDN)**: All significant images, such as those used in service cards and team member profiles, are referenced directly from Unsplash URLs. This approach offloads asset hosting to a CDN, reducing the bundle size, improving loading performance, and simplifying deployment. If custom images were required, they would be uploaded to a dedicated CDN (e.g., Manus S3, Cloudinary) and referenced via their public URLs.
*   **SVG Icons**: Icons are embedded directly as SVG elements within components or imported as React components, providing flexibility in styling and ensuring crisp rendering at any resolution.

This strategy prioritizes leveraging external CDNs for large media to optimize build times and deployment efficiency, especially for platforms like Vercel.

## Deployment Instructions (Vercel)

This project is optimized for static deployment on platforms like Vercel. Follow these steps to deploy your application:

1.  **Build the Project**: First, build the project for production:

    ```bash
    cd /path/to/thamana-clean
    npm run build
    ```

    This command will generate a `dist/` directory containing all the production-ready static assets (HTML, CSS, JavaScript).

2.  **Deploy to Vercel**: 
    *   **Connect to Git**: Ensure your project is pushed to a Git repository (GitHub, GitLab, Bitbucket).
    *   **Import Project**: Go to your Vercel Dashboard, click "Add New..." -> "Project", and import your Git repository.
    *   **Configure Project**: Vercel will automatically detect that it's a Vite project. Ensure the following settings:
        *   **Framework Preset**: `Vite`
        *   **Build Command**: `npm run build`
        *   **Output Directory**: `dist`
    *   **Deploy**: Click "Deploy". Vercel will build and deploy your application as a static site.

    The `Output Directory` setting in Vercel is crucial. It should be set to `dist` because that's where Vite places the optimized build output. The `Root Directory` setting in Vercel is empty or points to the root of your repository if your project is not in a subdirectory.

**Important:** This project does not use serverless functions or any backend code, so ensure your Vercel deployment is configured for a purely static site.
