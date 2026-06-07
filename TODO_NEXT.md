# Next Cleanup Pass

This file captures the next practical work after moving the repo to one root package and splitting registry source from the catalog app.

## Current State

- Root `package.json` is now the only package source of truth.
- Registry source lives in `src/registry`.
- Catalog and preview-only examples live in `src/catalog`.
- The catalog uses searchable metadata split across `src/catalog/catalog-data`.
- Catalog previews are lazy-loaded from the selected detail view.
- The first generated brutal component registry entries exist: alert, badge, button, card, and input.
- The old Radix toast/toaster path has been removed; Sonner remains as the toast surface.
- `npm run build` passes.
- `npm run lint` passes with Fast Refresh warnings.
- `npm outdated` is clean.
- `npm run typecheck` passes.

## Recommended Next Task

Add registry entries for the next focused component batch.

This is the best next task because the catalog now has a clearer shape, and the first generated entries prove the registry wiring. The next pass should expand coverage in small batches while keeping dependency and file-target metadata easy to review.

## Suggested Component Batch

- `brutal-accordion`
- `brutal-checkbox`
- `brutal-dialog`
- `brutal-popover`
- `brutal-tooltip`

## Suggested Order

1. Add one registry item at a time in `registry.json`.
2. Include every required source file, dependency, and utility target for that item.
3. Add `registryUrl` and `installCommand` metadata to the matching catalog item.
4. Run `npm run build` after each small batch to regenerate `public/r`.
5. Finish with `npm run typecheck`, `npm run build`, and `npm run lint`.

## Follow-Up Cleanup

- Move repeated registry metadata into a helper once more component entries are generated.
- Address the remaining Fast Refresh lint warnings when the registry component API settles.
