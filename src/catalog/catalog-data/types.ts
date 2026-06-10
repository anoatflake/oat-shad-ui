import type { ComponentType } from "react";

export type PreviewModule = {
  default: ComponentType;
};

export type CatalogKind = "block" | "component" | "theme";
export type CatalogVariant = "tokens" | "ui-brutal";

export type CatalogItem = {
  id: string;
  name: string;
  kind: CatalogKind;
  variant: CatalogVariant;
  description: string;
  tags: string[];
  sourcePath: string;
  previewPath: string;
  dependencies: string[];
  registryUrl?: string;
  installCommand?: string;
  heavy?: boolean;
  loadPreview: () => Promise<PreviewModule>;
};
