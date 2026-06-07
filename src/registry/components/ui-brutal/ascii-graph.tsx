//TODO: this is a responsive graph component to build responsive flow charts (ala planetscale but actually for real)
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ASCIIGraphProps extends React.HTMLAttributes<HTMLDivElement> {}

type ASCIIGraphSlotProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: string;
  from?: string;
  to?: string;
};

const ASCIIGraph = React.forwardRef<HTMLDivElement, ASCIIGraphProps>(
  ({ className, ...props }: ASCIIGraphProps, ref) => (
    <div className={cn(className)}>
      <div ref={ref} {...props} />
    </div>
  ),
);
ASCIIGraph.displayName = "ASCIIGraph";

const ASCIIGraphHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
ASCIIGraphHeader.displayName = "ASCIIGraphHeader";

const ASCIIGraphTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
ASCIIGraphTitle.displayName = "ASCIIGraphTitle";

const ASCIIGraphDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ASCIIGraphDescription.displayName = "ASCIIGraphDescription";

const ASCIIGraphContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
ASCIIGraphContent.displayName = "ASCIIGraphContent";

function createASCIIGraphSlot(displayName: string, baseClassName: string) {
  const Slot = React.forwardRef<HTMLDivElement, ASCIIGraphSlotProps>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn(baseClassName, className)} {...props} />
    ),
  );

  Slot.displayName = displayName;
  return Slot;
}

const ASCIIGraphNodes = createASCIIGraphSlot(
  "ASCIIGraphNodes",
  "relative grid gap-3",
);

const ASCIIGraphNode = createASCIIGraphSlot(
  "ASCIIGraphNode",
  "rounded-md border bg-card p-3 text-card-foreground",
);

const ASCIIGraphEdges = createASCIIGraphSlot(
  "ASCIIGraphEdges",
  "pointer-events-none absolute inset-0",
);

const ASCIIGraphEdge = createASCIIGraphSlot(
  "ASCIIGraphEdge",
  "border-muted-foreground/50 absolute border",
);

const ASCIIGraphFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
ASCIIGraphFooter.displayName = "ASCIIGraphFooter";

export {
  ASCIIGraph,
  ASCIIGraphHeader,
  ASCIIGraphContent,
  ASCIIGraphFooter,
  ASCIIGraphTitle,
  ASCIIGraphDescription,
  ASCIIGraphNodes,
  ASCIIGraphNode,
  ASCIIGraphEdges,
  ASCIIGraphEdge,
};
