import { Github } from "lucide-react";
import ColorPreview from "./components/preview/colors";
import AccordionPreview from "./components/preview/ui/accordion";
import AlertPreview from "./components/preview/ui/alert";
import BadgePreview from "./components/preview/ui/badge";
import ButtonPreview from "./components/preview/ui/button";
import CalenderPreview from "./components/preview/ui/calender";
import CardPreview from "./components/preview/ui/card";
import ChartPreview from "./components/preview/ui/chart";
import CheckboxPreview from "./components/preview/ui/checkbox";
import DialogPreview from "./components/preview/ui/dialog";
import PopoverPreview from "./components/preview/ui/popover";
import SelectPreview from "./components/preview/ui/select";
import SonnerPreview from "./components/preview/ui/sonner";
import ToastPreview from "./components/preview/ui/toast";
import TogglePreview from "./components/preview/ui/toggle";
import TooltipPreview from "./components/preview/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Button } from "./components/ui/button";
import InputPreview from "./components/preview/ui/input";
import CommandPreview from "./components/preview/ui/command";
import ContextMenuPreview from "./components/preview/ui/context-menu";
import DropdownMenuPreview from "./components/preview/ui/dropdown-menu";
import DrawerPreview from "./components/preview/ui/drawer";
import HoverCardPreview from "./components/preview/ui/hover-card";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import SheetPreview from "./components/preview/ui/sheet";
import InputOTPPreview from "./components/preview/ui/input-otp";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="oat-shad-ui-theme">
        <div className="flex flex-col items-center">
          <header className="flex w-full max-w-screen-lg flex-row items-center justify-between p-4 md:px-8">
            <h1 className="rounded-lg border-2 border-outline bg-white px-4 py-2 text-2xl font-semibold text-black text-foreground shadow-[5px_5px_rgb(0,0,0,1)] transition-colors hover:bg-accent dark:border-[rgb(50,50,50,1)] dark:bg-black dark:shadow-[5px_5px_rgb(50,50,50,1)] dark:hover:bg-accent md:px-8">
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
                <Github />
                <span className="sr-only">Link to Github Repository</span>
              </Button>
              <ThemeToggle />
            </span>
          </header>
          <main className="flex w-full flex-col flex-wrap gap-4 p-4 md:p-8">
            <ColorPreview />
            <AccordionPreview />
            <AlertPreview />
            <BadgePreview />
            <ButtonPreview />
            <CalenderPreview />
            <CardPreview />
            <ChartPreview />
            <CheckboxPreview />
            <CommandPreview />
            <ContextMenuPreview />

            <DialogPreview />
            <DrawerPreview />
            <DropdownMenuPreview />
            <HoverCardPreview />
            <InputPreview />
            <InputOTPPreview />
            <PopoverPreview />
            <SelectPreview />
            <SheetPreview />
            <SonnerPreview />
            <ToastPreview />
            <TooltipPreview />
            <TogglePreview />
          </main>
          <Toaster />
          <SonnerToaster />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
