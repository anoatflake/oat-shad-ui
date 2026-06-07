# Project Todo

Goal: make this the main home for oat shadcn components: source components and blocks, a generated shadcn registry, and a slim searchable catalog site.

## P0 - Define the product shape

- [ ] Make the repo root the project entry point for the component registry and catalog site.
- [ ] Decide whether `preview/` should be promoted to the root app or replaced by a new slim catalog app.
- [ ] Keep the website intentionally small: list, search, filter, preview, install command, and source link.
- [ ] Define the public registry URL structure for themes, components, blocks, and examples.
- [ ] Document the source-of-truth folders for components, blocks, registry metadata, and catalog pages.

## P0 - Restore runnable scripts

- [ ] Fix root `package.json`; `npm run build` points to missing `scripts/build-schemas.ts`.
- [ ] Add root scripts for `dev`, `build`, `registry:build`, `typecheck`, `lint`, and `format`.
- [ ] Make `npm run dev` start the slim catalog site from the repo root.
- [ ] Make `npm run build` build both the catalog site and generated registry files.
- [ ] Fix `preview/eslint.config.js`; `react-refresh` is imported but not registered while its rule is enabled.
- [ ] Remove tracked `*.tsbuildinfo` files from git and rely on `.gitignore`.

## P0 - Establish source folders

- [ ] Create a clear source folder for installable components, such as `src/registry/components`.
- [ ] Create a clear source folder for installable blocks, such as `src/registry/blocks`.
- [ ] Create a clear source folder for shared registry utilities, hooks, and library files.
- [ ] Create a clear source folder for themes and CSS tokens.
- [ ] Move preview-only examples out of installable component folders.
- [ ] Decide whether `ui-brutal` remains the install target or becomes a shared component API with theme variants.

## P1 - Build the registry pipeline

- [ ] Rebuild `scripts/build-schemas.ts` or replace it with a new registry builder.
- [ ] Generate shadcn-compatible JSON for every component.
- [ ] Generate shadcn-compatible JSON for every block.
- [ ] Generate shadcn-compatible JSON for themes.
- [ ] Generate a registry index that powers the catalog site's search and filters.
- [ ] Include metadata for name, type, description, category, dependencies, files, preview component, and install URL.
- [ ] Validate generated registry entries against the local Zod schema.
- [ ] Validate `schemas/oat-theme.json` against the local Zod schema.
- [ ] Validate schema examples against the local Zod schema.
- [ ] Add a registry build check to CI or the default local verification path.

## P1 - Build the slim catalog site

- [ ] Replace the current all-on-one-page preview with a searchable catalog.
- [ ] Add search across component name, description, category, and tags.
- [ ] Add filters for `component`, `block`, and `theme`.
- [ ] Add a component detail view with live preview, install command, dependencies, files, and source link.
- [ ] Add a block detail view with live preview, install command, dependencies, files, and source link.
- [ ] Add a theme detail view with palette preview, install command, and token list.
- [ ] Keep heavy demos lazy-loaded so the catalog stays fast.
- [ ] Add empty, loading, and error states for catalog data.
- [ ] Add responsive layout for desktop and mobile catalog browsing.

## P1 - Fix naming and shadcn config

- [ ] Fix shadcn aliases in `components.json` if the published install target changes.
- [ ] Normalize naming: `calender` to `calendar`.
- [ ] Normalize naming: `expample-card.json` to `example-card.json`.
- [ ] Fix README typos and repo URL casing.
- [ ] Decide whether published files install into `@/components/ui` or a project-specific folder.
- [ ] Ensure generated install commands match the actual published registry URLs.

## P1 - Add component authoring workflow

- [ ] Create a repeatable component scaffold workflow for source file, preview, registry metadata, and docs.
- [ ] Create a repeatable block scaffold workflow for source files, preview, registry metadata, and docs.
- [ ] Add a checklist for new registry items: accessible states, dark mode, responsive behavior, dependencies, and install test.
- [ ] Add focused preview fixtures for each component instead of large copied demo pages.
- [ ] Add a quick local command to test installing a generated component into a scratch app.

## P2 - Reduce preview and theme noise

- [ ] Tame chart previews; there are many copied chart example files.
- [ ] Keep one canonical chart example set.
- [ ] Consolidate CSS and theme files.
- [ ] Decide whether `COLOR_DUMP.md` is useful design documentation or extraction debris.
- [ ] Fill or remove old Tailwind config TODOs if the Tailwind 4 CSS-first setup is now the real path.
- [ ] Keep only preview assets that support the catalog site or installable blocks.

## P2 - Documentation and quality

- [ ] Rewrite the README around the registry project's purpose.
- [ ] Document how to run the catalog site.
- [ ] Document how to add a component.
- [ ] Document how to add a block.
- [ ] Document how to publish or host registry JSON.
- [ ] Update the README component and block list from generated registry metadata.
- [ ] Run Prettier consistently across the repo.
- [ ] Add lightweight visual QA for the catalog page.
- [ ] Add screenshot checks for core component and block previews.
- [ ] Add a basic accessibility pass for color contrast.
