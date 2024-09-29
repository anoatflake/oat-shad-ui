import ColorPreview from "./components/preview/colors";
import AccordionPreview from "./components/preview/ui/accordion";
import AlertPreview from "./components/preview/ui/alert";
import BadgePreview from "./components/preview/ui/badge";
import ButtonPreview from "./components/preview/ui/button";
import CalenderPreview from "./components/preview/ui/calender";
import CardPreview from "./components/preview/ui/card";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="oat-shad-ui-theme">
        <div className="flex flex-col items-center">
          <header className="flex w-full max-w-screen-lg flex-row justify-around p-4">
            <h1 className="text-3xl font-semibold">oat🌾shad🐟ui💻</h1>
            <ThemeToggle />
          </header>
          <div className="flex flex-col gap-4">
            <ColorPreview />
            <AccordionPreview />
            <AlertPreview />
            <BadgePreview />
            <ButtonPreview />
            <CalenderPreview />
            <CardPreview />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
