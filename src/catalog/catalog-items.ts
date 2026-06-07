import { themeItems } from "./catalog-data/themes";
import { uiBrutalItems } from "./catalog-data/ui-brutal";

export type {
  CatalogItem,
  CatalogKind,
  CatalogVariant,
} from "./catalog-data/types";

export const catalogItems = [...themeItems, ...uiBrutalItems];
