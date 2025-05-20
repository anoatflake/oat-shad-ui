import { cn } from "@/lib/utils";
import {
  CircleCheckBig,
  CircleX,
  Info,
  RotateCw,
  TriangleAlert,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { buttonVariants } from "./button";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      visibleToasts={4}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "scalloped toast group w-full p-6 md:max-w-[420px] first:bg-white [&:nth-child(2)]:bg-slate-100 [&:nth-child(3)]:bg-slate-200 [&:nth-child(4)]:bg-slate-300 bg-slate-300 dark:first:bg-black dark:[&:nth-child(2)]:bg-stone-950 dark:[&:nth-child(3)]:bg-stone-900 dark:[&:nth-child(4)]:bg-stone-800 dark:bg-stone-800 flex items-center gap-4",
          title: "text-md",
          description: "group-[.toast]:text-muted-foreground text-sm",
          actionButton: cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
          ),
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={{
        success: <CircleCheckBig className="text-green-600" />,
        info: <Info />,
        warning: (
          <TriangleAlert className="fill-gold-400 dark:fill-black dark:text-gold-400" />
        ),
        error: <CircleX className="text-red-500" />,
        loading: <RotateCw className="animate-spin" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
