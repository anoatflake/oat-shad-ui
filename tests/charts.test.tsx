import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, expect, test, vi } from "vitest";

import PieLegendPreview from "@catalog/previews/ui-brutal/charts/chart-pie-legend";
import RadarIconsPreview from "@catalog/previews/ui-brutal/charts/chart-radar-icons";
import RadarLegendPreview from "@catalog/previews/ui-brutal/charts/chart-radar-legend";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui-brutal/chart";

beforeAll(() => {
  // jsdom has no layout; give the real responsive charts measurable containers.
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function (this: HTMLElement) {
      return new DOMRect(
        0,
        0,
        320,
        this.classList.contains("recharts-responsive-container") ? 200 : 20,
      );
    },
  );
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterAll(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

test("pie legend styles reach the rendered content", async () => {
  render(<PieLegendPreview />);

  const label = await screen.findByText("Chrome");
  expect(label.parentElement).toHaveClass(
    "-translate-y-2",
    "flex-wrap",
    "gap-2",
  );
});

test.each([
  ["radar icons", RadarIconsPreview],
  ["radar legend", RadarLegendPreview],
])("%s keeps spacing on its rendered legend", async (_name, Preview) => {
  render(<Preview />);

  const label = await screen.findByText("Desktop");
  expect(label.parentElement).toHaveClass("mt-8");
});

test("tooltips preserve configured React node labels", () => {
  render(
    <ChartContainer
      config={{ desktop: { label: <strong>Desktop visitors</strong> } }}
    >
      <ChartTooltipContent
        active
        label="desktop"
        labelFormatter={(label) => <em>{label}</em>}
        payload={[
          {
            name: "desktop",
            dataKey: "desktop",
            value: 42,
            graphicalItemId: "desktop",
          },
        ]}
      />
    </ChartContainer>,
  );

  expect(
    screen.getAllByText("Desktop visitors")[0].closest("em"),
  ).toBeInTheDocument();
  expect(screen.getByText("42")).toBeVisible();
});
