import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"
import { ArrowDown } from "lucide-react"

function Accordion({
  className,
  type: _type,
  collapsible: _collapsible,
  ...props
}: AccordionPrimitive.Root.Props & {
  type?: "single" | "multiple"
  collapsible?: boolean
}) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b-2 border-outline", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-center justify-between rounded-sm py-4 font-medium decoration-dashed decoration-2 underline-offset-4 transition-all hover:underline focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-outline aria-disabled:pointer-events-none aria-disabled:opacity-50 [&[aria-expanded=true]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ArrowDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn("h-(--accordion-panel-height) pt-0 pb-4", className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
