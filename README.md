# oat shad ui

Registry and catalog home for custom shadcn/ui themes, components, and blocks.

Use Node.js 24.15 or newer on the 24.x LTS line, or Node.js 26+. Run `nvm use`
to select Node 24, then install dependencies with `npm ci`.

## Commands

Run these from the repo root:

```sh
npm run dev
npm run build
npm run registry:build
npm run typecheck
npm run lint
npm test
npm run test:registry
npm run check
npm run format
```

`npm run dev` starts the catalog app. `npm run build` builds the shadcn registry JSON files into `public/r` and then builds the catalog app.

`npm test` runs the unit and DOM integration tests. `npm run test:watch` runs
them in watch mode. `npm run test:registry` rebuilds the registry and checks
that every installable item preserves its metadata, targets, and source.
`npm run check` runs typechecking, lint, both test suites, and the production
catalog build; GitHub Actions runs it on pull requests and pushes to `main`.

Dependencies target the latest compatible stable releases. TypeScript stays
on 6.0.3 because `typescript-eslint` 8.72.2 requires TypeScript below 6.1;
upgrade to TypeScript 7 once the lint tooling supports its compiler API.

The `minimatch` override keeps the lint and registry tools on the patched 11.x
release; remove it when their dependency ranges include 11.x. The latest
shadcn CLI still brings in `deepmerge` 4.3.1, which has an unpatched
[low-severity advisory](https://github.com/advisories/GHSA-gcqx-w48m-w2h4).

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
