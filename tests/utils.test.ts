import { describe, expect, test } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  test("combines conditional and nested class names", () => {
    expect(
      cn("rounded-sm", ["font-bold", false], { block: true, hidden: false }),
    ).toBe("rounded-sm font-bold block");
  });

  test("lets consumers override component sizing", () => {
    expect(cn("h-10 px-4 py-2", "h-12 px-8")).toBe("py-2 h-12 px-8");
  });

  test("merges custom palette colors independently for light and dark", () => {
    expect(
      cn("bg-white dark:bg-black", "bg-gold-400 dark:bg-blue_chill-900"),
    ).toBe("bg-gold-400 dark:bg-blue_chill-900");
  });

  test("preserves arbitrary variants while resolving their conflicts", () => {
    expect(
      cn("data-[state=open]:bg-red-500", "data-[state=open]:bg-gold-300"),
    ).toBe("data-[state=open]:bg-gold-300");
  });
});
