import type * as React from "react";
import { GithubIcon } from "./components/github-icon";
import ColorPreview from "./components/preview/colors";
import FractalGlassImagePreview from "./components/preview/fractal-glass-image";
import SmoothAccordionPreview from "./components/preview/ui-smooth/accordion";
import SmoothAlertPreview from "./components/preview/ui-smooth/alert";
import SmoothBadgePreview from "./components/preview/ui-smooth/badge";
import SmoothButtonPreview from "./components/preview/ui-smooth/button";
import SmoothCalenderPreview from "./components/preview/ui-smooth/calender";
import SmoothCardPreview from "./components/preview/ui-smooth/card";
import SmoothChartPreview from "./components/preview/ui-smooth/chart";
import SmoothCheckboxPreview from "./components/preview/ui-smooth/checkbox";
import SmoothDialogPreview from "./components/preview/ui-smooth/dialog";
import SmoothPopoverPreview from "./components/preview/ui-smooth/popover";
import SmoothSelectPreview from "./components/preview/ui-smooth/select";
import SmoothSonnerPreview from "./components/preview/ui-smooth/sonner";
import SmoothToastPreview from "./components/preview/ui-smooth/toast";
import SmoothTogglePreview from "./components/preview/ui-smooth/toggle";
import SmoothTooltipPreview from "./components/preview/ui-smooth/tooltip";
import BaseAccordionPreview from "./components/preview/ui-base/accordion";
import BaseAlertPreview from "./components/preview/ui-base/alert";
import BaseBadgePreview from "./components/preview/ui-base/badge";
import BaseButtonPreview from "./components/preview/ui-base/button";
import BaseCalenderPreview from "./components/preview/ui-base/calender";
import BaseCardPreview from "./components/preview/ui-base/card";
import BaseChartPreview from "./components/preview/ui-base/chart";
import BaseCheckboxPreview from "./components/preview/ui-base/checkbox";
import BaseDialogPreview from "./components/preview/ui-base/dialog";
import BasePopoverPreview from "./components/preview/ui-base/popover";
import BaseSelectPreview from "./components/preview/ui-base/select";
import BaseSonnerPreview from "./components/preview/ui-base/sonner";
import BaseToastPreview from "./components/preview/ui-base/toast";
import BaseTogglePreview from "./components/preview/ui-base/toggle";
import BaseTooltipPreview from "./components/preview/ui-base/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Button } from "./components/ui-smooth/button";
import SmoothInputPreview from "./components/preview/ui-smooth/input";
import SmoothCommandPreview from "./components/preview/ui-smooth/command";
import SmoothContextMenuPreview from "./components/preview/ui-smooth/context-menu";
import SmoothDropdownMenuPreview from "./components/preview/ui-smooth/dropdown-menu";
import SmoothDrawerPreview from "./components/preview/ui-smooth/drawer";
import SmoothHoverCardPreview from "./components/preview/ui-smooth/hover-card";
import BaseInputPreview from "./components/preview/ui-base/input";
import BaseCommandPreview from "./components/preview/ui-base/command";
import BaseContextMenuPreview from "./components/preview/ui-base/context-menu";
import BaseDropdownMenuPreview from "./components/preview/ui-base/dropdown-menu";
import BaseDrawerPreview from "./components/preview/ui-base/drawer";
import BaseHoverCardPreview from "./components/preview/ui-base/hover-card";
import { Toaster } from "./components/ui-smooth/toaster";
import { Toaster as SonnerToaster } from "./components/ui-smooth/sonner";
import SmoothSheetPreview from "./components/preview/ui-smooth/sheet";
import SmoothInputOTPPreview from "./components/preview/ui-smooth/input-otp";
import BaseSheetPreview from "./components/preview/ui-base/sheet";
import BaseInputOTPPreview from "./components/preview/ui-base/input-otp";

function ComparisonPreview({
  name,
  smooth,
  base,
}: {
  name: string;
  smooth: React.ReactNode;
  base: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-[minmax(360px,1fr)_minmax(360px,1fr)] gap-3 overflow-x-auto rounded-lg border p-3">
      <div className="min-w-0">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {name} · smooth neumorphic
        </div>
        {smooth}
      </div>
      <div className="min-w-0">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {name} · Base UI port
        </div>
        {base}
      </div>
    </section>
  );
}

const comparisons = [
  ["Accordion", <SmoothAccordionPreview />, <BaseAccordionPreview />],
  ["Alert", <SmoothAlertPreview />, <BaseAlertPreview />],
  ["Badge", <SmoothBadgePreview />, <BaseBadgePreview />],
  ["Button", <SmoothButtonPreview />, <BaseButtonPreview />],
  ["Calendar", <SmoothCalenderPreview />, <BaseCalenderPreview />],
  ["Card", <SmoothCardPreview />, <BaseCardPreview />],
  ["Chart", <SmoothChartPreview />, <BaseChartPreview />],
  ["Checkbox", <SmoothCheckboxPreview />, <BaseCheckboxPreview />],
  ["Command", <SmoothCommandPreview />, <BaseCommandPreview />],
  ["Context Menu", <SmoothContextMenuPreview />, <BaseContextMenuPreview />],
  ["Dialog", <SmoothDialogPreview />, <BaseDialogPreview />],
  ["Drawer", <SmoothDrawerPreview />, <BaseDrawerPreview />],
  ["Dropdown Menu", <SmoothDropdownMenuPreview />, <BaseDropdownMenuPreview />],
  ["Hover Card", <SmoothHoverCardPreview />, <BaseHoverCardPreview />],
  ["Input", <SmoothInputPreview />, <BaseInputPreview />],
  ["Input OTP", <SmoothInputOTPPreview />, <BaseInputOTPPreview />],
  ["Popover", <SmoothPopoverPreview />, <BasePopoverPreview />],
  ["Select", <SmoothSelectPreview />, <BaseSelectPreview />],
  ["Sheet", <SmoothSheetPreview />, <BaseSheetPreview />],
  ["Sonner", <SmoothSonnerPreview />, <BaseSonnerPreview />],
  ["Toast", <SmoothToastPreview />, <BaseToastPreview />],
  ["Tooltip", <SmoothTooltipPreview />, <BaseTooltipPreview />],
  ["Toggle", <SmoothTogglePreview />, <BaseTogglePreview />],
] as const;

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="oat-shad-ui-theme">
        <div className="flex flex-col items-center">
          <header className="flex w-full max-w-screen-lg flex-row items-center justify-between p-4 md:px-8">
            <h1 className="smooth-panel rounded-3xl bg-teal_background-500/75 px-4 py-2 text-2xl font-semibold text-primary transition-colors md:px-8">
              oat
              <span aria-hidden>🌾</span>
              shad
              <span aria-hidden>🐟</span>
              ui
              <span aria-hidden>💻</span>
            </h1>
            <span className="flex gap-2">
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
                <GithubIcon />
                <span className="sr-only">Link to GitHub Repository</span>
              </Button>
              <ThemeToggle />
            </span>
          </header>
          <main className="flex w-full flex-col flex-wrap gap-4 p-4 md:p-8">
            <ColorPreview />
            <FractalGlassImagePreview />
            {comparisons.map(([name, smooth, base]) => (
              <ComparisonPreview
                key={name}
                name={name}
                smooth={smooth}
                base={base}
              />
            ))}
          </main>
          <Toaster />
          <SonnerToaster />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
