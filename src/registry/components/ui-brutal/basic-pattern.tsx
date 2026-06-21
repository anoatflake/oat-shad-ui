import { CSSProperties } from "react";

export type Pattern = "bars" | "grid" | "lines" | "blocks" | "wireframe";

const patternStyles: Record<Pattern, CSSProperties> = {
  bars: {
    backgroundImage:
      "repeating-linear-gradient(90deg, rgb(255 255 255 / 0.95) 0 3px, transparent 3px 12px)",
    maskImage:
      "radial-gradient(140% 100% at 55% 100%, transparent 0 34%, black 35% 100%)",
  },
  grid: {
    backgroundImage:
      "linear-gradient(rgb(79 70 55 / 0.65) 2px, transparent 2px), linear-gradient(90deg, rgb(79 70 55 / 0.65) 2px, transparent 2px)",
    backgroundSize: "18px 18px",
  },
  lines: {
    backgroundImage:
      "repeating-linear-gradient(0deg, rgb(224 251 255 / 0.85) 0 2px, transparent 2px 9px)",
  },
  blocks: {
    backgroundImage:
      "repeating-linear-gradient(90deg, rgb(0 62 38 / 0.9) 0 5px, transparent 5px 9px), repeating-linear-gradient(0deg, rgb(0 62 38 / 0.9) 0 4px, transparent 4px 28px)",
  },
  wireframe: {
    backgroundImage:
      "linear-gradient(rgb(255 255 255 / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.08) 1px, transparent 1px)",
    backgroundSize: "14px 14px",
  },
};

export function Pattern({ variant }: { variant: Pattern }) {
  return (
    <div
      aria-hidden="true"
      className="h-28 w-full rounded-sm opacity-90"
      style={patternStyles[variant]}
    />
  );
}
