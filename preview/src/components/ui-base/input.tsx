import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { hueVariants } from "@/lib/hue-variants"

function Input({
  className,
  type,
  hue,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof hueVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-md border-2 border-outline bg-transparent px-3 py-2 text-sm ring-offset-background outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        hueVariants({ hue }),
        className
      )}
      {...props}
    />
  )
}

export { Input }
