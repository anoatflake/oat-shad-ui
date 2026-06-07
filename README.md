# oat shad ui

Registry and catalog home for custom shadcn/ui themes, components, and blocks.

## Commands

Run these from the repo root:

```sh
npm run dev
npm run build
npm run registry:build
npm run typecheck
npm run lint
npm run format
```

`npm run dev` starts the catalog app. `npm run build` builds the shadcn registry JSON files into `public/r` and then builds the catalog app.

## Folder Map

- `registry.json` - shadcn source registry, following the official registry schema.
- `public/r/` - generated static registry JSON served as `/r/registry.json` and `/r/[name].json`.
- `src/registry/components/ui-brutal/` - brutal installable component source.
- `src/registry/lib/` - installable shared utilities.
- `src/registry/hooks/` - installable shared hooks.
- `src/catalog/` - catalog app, preview-only examples, styles, and demo shell.
- `schemas/` - legacy registry examples and schema scratch files.
- `schemas/examples/` - schema examples and scratch fixtures.

Registry files should not import from `src/catalog`. The catalog can import from `src/registry` to render previews.

## Install

### Theme

```sh
npx shadcn@latest add "https://raw.githubusercontent.com/anoatflake/oat-shad-ui/main/public/r/oat-theme.json"
```
