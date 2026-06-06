"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckBig,
  CircleX,
  Info,
  Loader2Icon,
  TriangleAlert,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

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
          content: "order-0 flex-1",
          icon: "flex size-5 shrink-0 items-center justify-center",
          loader:
            "!static !translate-x-0 !translate-y-0 !scale-100 !transform-none",
          actionButton: cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "order-2",
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
        loading: <Loader2Icon className="animate-spin" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
