# AGENTS.md - OpenCode Instructions for DerenzeitPageAngular

This file provides concise, repo-specific guidance for OpenCode agents to avoid common pitfalls and ramp up quickly.

---

## Commands

### Build & Run

- **Build Production**:
  ```bash
  ng build
  ```

### Code Formatting

- **Prettier**: Configured in `package.json` with:
  - Print width: 100
  - Single quotes
  - Angular HTML parser for `.html` files
  - No pre-commit hooks (run manually if needed).

---

## Architecture

### Core Structure

- **Framework**: Angular v20.3.0 (standalone components, no `NgModule`).
- **Entry Point**: `src/main.ts` (bootstraps `App` component).
- **Routing**: Lazy-loaded routes defined in `src/app/app.routes.ts`.
- **State Management**: Angular `signal`-based reactivity (no NgRx).
- **Styling**: Component-scoped CSS + global `src/styles.css`.

### Key Directories

- `src/app/core/features/`: Feature modules (e.g., `issues`, `welcome`).
- `src/app/core/layout/`: Layout components (e.g., `main-layout`, `header`).
- `public/`: Static assets (copied to build output).

### Build Artifacts

- **`.htaccess`**: Included in build for Apache (URL rewriting, caching).
- **Budgets**: Production builds enforce size limits (e.g., 1MB max for initial load).

---

## Conventions

### Language

- **German-focused**: UI text, commit messages, and documentation are in German.

### Code Style

- **TypeScript**: Strict mode enabled (`strict: true` in `tsconfig.json`).
- **Components**: Standalone (no `NgModule`).
- **Reactivity**: Prefer `signal` over `Observable` for local state.

### Testing

- There are no tests
-

---

## Quirks

### Toolchain

- **No Linting**: No ESLint/TSLint (Prettier only).
- **No Husky**: No pre-commit hooks (format manually).
- **No SSR/SSG**: Client-side SPA only (no Angular Universal).

### Static Assets

- **`public/`**: Files here are copied to build output (e.g., `.htaccess`).

### Angular-Specific

- **Standalone Components**: All components are standalone (no `NgModule`).
- **Lazy-Loading**: Routes use `loadComponent` (not `loadChildren`).

---

## Guardrails

### General

- When asked to do something, only do exactly what is asked.
- When asked to do something, do not extend the scope of your task beyond the original scope.

### Git

- Never add or commit any files. Any change to the git graph is being made by the user
- Only create, rebase or merge branches when explicitly asked. Never do this on your own.
- Only change

### File scope

- Never execute any scripts
- The folder `scripts` is off-limits. Never read it, never write into it. Never execute any file in it.
