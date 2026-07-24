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
            "scalloped toast group flex w-full items-center gap-4 bg-accent p-6 text-foreground first:bg-brutal-surface [&:nth-child(2)]:bg-card [&:nth-child(3)]:bg-muted [&:nth-child(4)]:bg-accent md:max-w-[420px]",
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
          <TriangleAlert className="fill-gold-400 text-gold-900 dark:fill-brutal-surface dark:text-gold-400" />
        ),
        error: <CircleX className="text-red-500" />,
        loading: <Loader2Icon className="animate-spin" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
