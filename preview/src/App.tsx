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
import SelectPreview from "./components/preview/ui/select";
import SonnerPreview from "./components/preview/ui/sonner";
import ToastPreview from "./components/preview/ui/toast";
import TogglePreview from "./components/preview/ui/toggle";
import TooltipPreview from "./components/preview/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="oat-shad-ui-theme">
        <div className="flex flex-col items-center">
          <header className="flex w-full max-w-screen-lg flex-row items-center justify-between p-4">
            <h1 className="rounded-lg border-2 border-black bg-white px-8 py-2 text-3xl font-semibold text-black shadow-[5px_5px_rgb(0,0,0,1)] transition-colors hover:bg-accent dark:border-[rgb(50,50,50,1)] dark:bg-black dark:text-white dark:shadow-[5px_5px_rgb(50,50,50,1)] dark:hover:bg-accent">
              oat
              <span aria-hidden>🌾</span>
              shad
              <span aria-hidden>🐟</span>
              ui
              <span aria-hidden>💻</span>
            </h1>
            <ThemeToggle />
          </header>
          <div className="flex flex-col gap-4 px-8">
            <ColorPreview />
            <AccordionPreview />
            <AlertPreview />
            <BadgePreview />
            <ButtonPreview />
            <CalenderPreview />
            <CardPreview />
            <ChartPreview />
            <CheckboxPreview />
            <DialogPreview />

            <SelectPreview />
            <SonnerPreview />
            <ToastPreview />
            <TogglePreview />
            <TooltipPreview />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
