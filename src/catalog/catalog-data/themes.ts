import { getInstallCommand } from "./install";
import type { CatalogItem } from "./types";

export const themeItems: CatalogItem[] = [
  {
    id: "oat-theme",
    name: "Oat Theme",
    kind: "theme",
    variant: "tokens",
    description: "Theme tokens and palette preview for the oat registry.",
    tags: ["theme", "tokens", "colors"],
    sourcePath: "registry.json",
    previewPath: "src/catalog/previews/colors.tsx",
    dependencies: [],
    registryUrl: "/r/oat-theme.json",
    installCommand: getInstallCommand("oat-theme"),
    loadPreview: () => import("@catalog/previews/colors"),
  },
];
