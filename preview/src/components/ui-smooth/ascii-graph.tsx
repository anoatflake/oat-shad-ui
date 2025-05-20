//TODO: this is a responsive graph component to build responsive flow charts (ala planetscale but actually for real)
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const asciiGraphVariants = cva();

export interface ASCIIGraphProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof asciiGraphVariants> {}

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

const ASCIIGraphNodes = 

const ASCIIGraphNode =

const ASCIIGraphEdges =     

const ASCIIGraphEdge = 

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
  ASCIIGraphFooter,
  ASCIIGraphTitle,
  ASCIIGraphDescription,
};
