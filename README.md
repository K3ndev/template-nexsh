# Next Template, Typescript, tailwind, and more

This template is designed to help you kickstart your Next.js projects with the following libraries and tools: Next.js, TypeScript, Tailwind CSS, Shacdn-ui components, Husky for Git hooks, AOS for animations, zod for validation, tanstack-query for asynchronous state management, and ESLint for code linting.

### Folder Structure

```bash
/
|- modules/
   |- home 
      |- components/
      |- hooks/
      |- contant/
      |- helpers/
      |- indes.tsx
|- pages/
   |- _document.tsx
   |- _app.tsx
   |- index.tsx
|- shared/
   |- components/
   |- hooks/
   |- lib/
   |- styles/
```

#### modules/

- this directory contains separate modules or sections of your application. Each module typically has its own set of pages, components, hooks, and other related files. This structure promotes modularity and keeps your codebase organized.

#### pages/

- this directory holds the main pages of your application.

#### shared/

- this directory contains common functionality and resources that are used across different parts of your application.

### Getting Started

1. Click "Use this template" above
2. Then create a new repository.

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result. You can start editing the page by modifying `modules/home/index.tsx`. The page auto-updates as you edit the file.

### Addional Notes

* This template uses shacdn-ui, just add the component then youre good to go
* Use aos library to add elegant animations
* Husky is configured to run pre-commit hooks, ensuring code quality before each commit
* CSS Layout Template
```css
/* Layout template you can use */
/* It will split the header, main, and footer similar to a hamburger menu */
#__next {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 0%;
}

/* CSS debugger */
* {
  box-sizing: border-box;
  outline: 1px solid limegreen !important;
}

```

#### Next Goal

* Create `login.tsx` for authentication readiness.
* Add sst setup
* Transition to using biome instead of ESLint and Prettier.