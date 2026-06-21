import * as React from "react";

import { cn } from "@/lib/utils";

type HandOfCardsCSSProperties = React.CSSProperties & {
  "--hand-card-width"?: string;
  "--hand-card-height"?: string;
  "--hand-card-overlap"?: string;
};

type HandOfCardsItemCSSProperties = React.CSSProperties & {
  "--hand-card-margin"?: string;
  "--hand-card-rotate"?: string;
  "--hand-card-y"?: string;
  "--hand-card-z"?: number;
};

type HandOfCardsChildProps = {
  className?: string;
};

type HandOfCardsProps = React.ComponentProps<"div"> & {
  cardClassName?: string;
  cardHeight?: string;
  cardWidth?: string;
  lift?: number;
  overlap?: number;
  spread?: number;
};

function getCardPosition({
  count,
  index,
  lift,
  spread,
}: {
  count: number;
  index: number;
  lift: number;
  spread: number;
}) {
  if (count <= 1) {
    return {
      rotate: 0,
      y: 0,
    };
  }

  const center = (count - 1) / 2;
  const distance = (index - center) / center;

  return {
    rotate: distance * spread,
    y: Math.abs(distance) * lift,
  };
}

function HandOfCards({
  cardClassName,
  cardHeight = "24rem",
  cardWidth = "18rem",
  children,
  className,
  lift = 28,
  overlap = 112,
  spread = 10,
  style,
  ...props
}: HandOfCardsProps) {
  const cards = React.Children.toArray(children);
  const containerStyle: HandOfCardsCSSProperties = {
    "--hand-card-height": cardHeight,
    "--hand-card-overlap": `${overlap}px`,
    "--hand-card-width": cardWidth,
    ...style,
  };

  return (
    <div
      data-slot="hand-of-cards"
      role="list"
      className={cn(
        "flex w-full items-center justify-center overflow-visible px-4 py-14 perspective-distant",
        className,
      )}
      style={containerStyle}
      {...props}
    >
      {cards.map((child, index) => {
        const { rotate, y } = getCardPosition({
          count: cards.length,
          index,
          lift,
          spread,
        });
        const itemStyle: HandOfCardsItemCSSProperties = {
          "--hand-card-margin":
            index === 0 ? "0px" : "calc(var(--hand-card-overlap) * -1)",
          "--hand-card-rotate": `${rotate}deg`,
          "--hand-card-y": `${y}px`,
          "--hand-card-z": index + 1,
        };

        return (
          <div
            data-slot="hand-of-cards-item"
            data-index={index}
            key={index}
            role="listitem"
            className="relative z-(--hand-card-z) ml-(--hand-card-margin) shrink-0 origin-bottom translate-y-(--hand-card-y) rotate-(--hand-card-rotate) transition-transform duration-300 ease-out focus-within:z-50 focus-within:-translate-y-3 focus-within:rotate-0 hover:z-50 hover:-translate-y-3 hover:rotate-0 motion-reduce:transition-none"
            style={itemStyle}
          >
            {React.isValidElement<HandOfCardsChildProps>(child)
              ? React.cloneElement(child, {
                  className: cn(
                    "h-[var(--hand-card-height)] w-[min(74vw,var(--hand-card-width))] shrink-0 overflow-hidden",
                    cardClassName,
                    child.props.className,
                  ),
                })
              : child}
          </div>
        );
      })}
    </div>
  );
}

export { HandOfCards };
export type { HandOfCardsProps };
