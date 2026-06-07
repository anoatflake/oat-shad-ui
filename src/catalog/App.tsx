import * as React from "react";
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  FolderGit2,
  Loader2,
  Package,
  Search,
} from "lucide-react";

import { ThemeProvider } from "@catalog/components/theme-provider";
import { ThemeToggle } from "@catalog/components/theme-toggle";
import {
  catalogItems,
  type CatalogItem,
  type CatalogKind,
  type CatalogVariant,
} from "@catalog/catalog-items";
import { Button } from "@/components/ui-brutal/button";
import { Toaster as SonnerToaster } from "@/components/ui-brutal/sonner";

type KindFilter = "all" | CatalogKind;
type VariantFilter = "all" | CatalogVariant;

const REPO_TREE_URL = "https://github.com/anOatFlake/oat-shad-ui/tree/main";

const kindFilters: Array<{ value: KindFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "component", label: "Components" },
  { value: "theme", label: "Themes" },
];

const variantFilters: Array<{ value: VariantFilter; label: string }> = [
  { value: "all", label: "All variants" },
  { value: "ui-brutal", label: "Brutal" },
  { value: "tokens", label: "Tokens" },
];

function App() {
  const [query, setQuery] = React.useState("");
  const [kindFilter, setKindFilter] = React.useState<KindFilter>("all");
  const [variantFilter, setVariantFilter] =
    React.useState<VariantFilter>("all");
  const [activeId, setActiveId] = React.useState(catalogItems[0]?.id ?? "");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const filteredItems = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return catalogItems.filter((item) => {
      const matchesKind =
        kindFilter === "all" ? true : item.kind === kindFilter;
      const matchesVariant =
        variantFilter === "all" ? true : item.variant === variantFilter;
      const searchableText = [
        item.name,
        item.description,
        item.kind,
        item.variant,
        item.sourcePath,
        item.previewPath,
        ...item.tags,
        ...item.dependencies,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery
        ? searchableText.includes(normalizedQuery)
        : true;

      return matchesKind && matchesVariant && matchesQuery;
    });
  }, [kindFilter, query, variantFilter]);

  const selectedItem =
    filteredItems.find((item) => item.id === activeId) ??
    filteredItems[0] ??
    null;

  const selectedPreview = React.useMemo(
    () =>
      selectedItem
        ? React.lazy(() => selectedItem.loadPreview())
        : null,
    [selectedItem],
  );

  const copyInstallCommand = React.useCallback(async (item: CatalogItem) => {
    if (!item.installCommand) {
      return;
    }

    await navigator.clipboard.writeText(item.installCommand);
    setCopiedId(item.id);
    window.setTimeout(() => setCopiedId(null), 1600);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="oat-shad-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-4 py-3 md:px-6">
            <div className="min-w-0">
              <h1 className="text-xl font-semibold tracking-normal md:text-2xl">
                oat shad ui
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>{catalogItems.length} catalog items</span>
                <span aria-hidden="true">/</span>
                <span>{filteredItems.length} visible</span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="primary"
                size="icon"
                onClick={() => {
                  window.open(
                    "https://github.com/anOatFlake/oat-shad-ui",
                    "_blank",
                  );
                }}
              >
                <FolderGit2 />
                <span className="sr-only">Repository</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="mx-auto grid w-full max-w-screen-2xl gap-4 px-4 py-4 md:px-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="min-w-0 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-hidden">
            <div className="space-y-3">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <span className="sr-only">Search catalog</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search catalog"
                  className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                />
              </label>

              <FilterGroup
                label="Type"
                options={kindFilters}
                value={kindFilter}
                onChange={setKindFilter}
              />
              <FilterGroup
                label="Variant"
                options={variantFilters}
                value={variantFilter}
                onChange={setVariantFilter}
              />
            </div>

            <div className="mt-4 grid gap-2 overflow-y-auto pb-2 lg:max-h-[calc(100vh-17rem)]">
              {filteredItems.map((item) => (
                <CatalogListItem
                  key={item.id}
                  item={item}
                  active={selectedItem?.id === item.id}
                  onSelect={() => setActiveId(item.id)}
                />
              ))}
              {filteredItems.length === 0 ? (
                <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                  No catalog items matched.
                </div>
              ) : null}
            </div>
          </aside>

          <section className="min-w-0">
            {selectedItem && selectedPreview ? (
              <CatalogDetail
                item={selectedItem}
                preview={selectedPreview}
                copied={copiedId === selectedItem.id}
                onCopyInstall={() => void copyInstallCommand(selectedItem)}
              />
            ) : (
              <div className="rounded-md border border-dashed p-8 text-sm text-muted-foreground">
                No preview selected.
              </div>
            )}
          </section>
        </main>

        <SonnerToaster />
      </div>
    </ThemeProvider>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.value)}
              className={[
                "rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CatalogListItem({
  item,
  active,
  onSelect,
}: {
  item: CatalogItem;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "group rounded-md border p-3 text-left transition-colors",
        active
          ? "border-primary bg-primary/10"
          : "border-border bg-background hover:bg-accent/40",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{item.name}</div>
          <div className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
            {item.description}
          </div>
        </div>
        <ItemKindIcon item={item} />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Pill>{item.variant}</Pill>
        {item.heavy ? <Pill>lazy</Pill> : null}
      </div>
    </button>
  );
}

function CatalogDetail({
  item,
  preview: Preview,
  copied,
  onCopyInstall,
}: {
  item: CatalogItem;
  preview: React.LazyExoticComponent<React.ComponentType>;
  copied: boolean;
  onCopyInstall: () => void;
}) {
  const sourceUrl = `${REPO_TREE_URL}/${item.sourcePath}`;

  return (
    <div className="min-w-0 space-y-4">
      <div className="border-b pb-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-semibold tracking-normal">
                {item.name}
              </h2>
              <Pill>{item.kind}</Pill>
              <Pill>{item.variant}</Pill>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Code2 className="size-4" />
              Source
              <ExternalLink className="size-3.5" />
            </a>
            {item.installCommand ? (
              <Button variant="outline" size="sm" onClick={onCopyInstall}>
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
                Install
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <MetaBlock label="Preview" value={item.previewPath} />
          <MetaBlock label="Source" value={item.sourcePath} />
          {item.registryUrl ? (
            <MetaBlock label="Registry" value={item.registryUrl} />
          ) : null}
          <MetaBlock
            label="Dependencies"
            value={
              item.dependencies.length ? item.dependencies.join(", ") : "none"
            }
          />
        </div>

        {item.installCommand ? (
          <pre className="mt-3 overflow-x-auto rounded-md border bg-muted/30 px-3 py-2 text-xs">
            <code>{item.installCommand}</code>
          </pre>
        ) : null}
      </div>

      <React.Suspense
        fallback={
          <div className="flex min-h-[360px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Loading preview
          </div>
        }
      >
        <div className="min-w-0 overflow-x-auto pb-8">
          <Preview />
        </div>
      </React.Suspense>
    </div>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-md border bg-background px-3 py-2">
      <div className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 truncate text-sm">{value}</div>
    </div>
  );
}

function ItemKindIcon({ item }: { item: CatalogItem }) {
  const Icon = item.kind === "theme" ? Package : Code2;

  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground">
      <Icon className="size-4" />
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export default App;
