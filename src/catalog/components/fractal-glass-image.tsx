import * as React from "react";

import { cn } from "@/lib/utils";

type ImageDecoding = React.ImgHTMLAttributes<HTMLImageElement>["decoding"];
type ImageLoading = React.ImgHTMLAttributes<HTMLImageElement>["loading"];
type ImageCrossOrigin =
  React.ImgHTMLAttributes<HTMLImageElement>["crossOrigin"];
type ImageReferrerPolicy =
  React.ImgHTMLAttributes<HTMLImageElement>["referrerPolicy"];
type Booleanish =
  | boolean
  | "true"
  | "false"
  | "1"
  | "0"
  | "on"
  | "off"
  | "yes"
  | "no";
type Numberish = number | `${number}`;

type FractalGlassImageProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  src: string;
  alt: string;
  steps?: Numberish;
  scale?: Numberish;
  baseFrequency?: Numberish;
  numOctaves?: Numberish;
  hue?: Numberish;
  saturation?: Numberish;
  brightness?: Numberish;
  flip?: Booleanish;
  shimmer?: Booleanish;
  cellWidthVariance?: Numberish;
  overlayScale?: Numberish;
  overlayOpacity?: Numberish;
  imageClassName?: string;
  overlayClassName?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
  srcSet?: string;
  sizes?: string;
  loading?: ImageLoading;
  decoding?: ImageDecoding;
  crossOrigin?: ImageCrossOrigin;
  referrerPolicy?: ImageReferrerPolicy;
  onImageLoad?: React.ReactEventHandler<HTMLImageElement>;
  onImageError?: React.ReactEventHandler<HTMLImageElement>;
};

const toCssUrl = (url: string) =>
  `url("${url.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}")`;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const toNumber = (value: Numberish | undefined, fallback: number) => {
  if (value === undefined) {
    return fallback;
  }

  const parsedValue = typeof value === "number" ? value : Number(value);

  return Number.isFinite(parsedValue) ? parsedValue : fallback;
};

const toBoolean = (value: Booleanish | undefined, fallback: boolean) => {
  if (value === undefined) {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  return ["true", "1", "on", "yes"].includes(value);
};

const FractalGlassImage = React.forwardRef<
  HTMLDivElement,
  FractalGlassImageProps
>(
  (
    {
      src,
      alt,
      steps,
      scale,
      baseFrequency,
      numOctaves,
      hue,
      saturation,
      brightness,
      flip,
      shimmer,
      cellWidthVariance,
      overlayScale,
      overlayOpacity,
      imageClassName,
      overlayClassName,
      objectFit = "cover",
      objectPosition = "50% 50%",
      srcSet,
      sizes,
      loading = "lazy",
      decoding = "async",
      crossOrigin,
      referrerPolicy,
      onImageLoad,
      onImageError,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const filterId = React.useMemo(
      () => `fractal-glass-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`,
      [reactId],
    );
    const normalizedSteps = toNumber(steps, 33);
    const normalizedScale = toNumber(scale, 2);
    const normalizedBaseFrequency = toNumber(baseFrequency, 0.05);
    const normalizedHue = toNumber(hue, 0);
    const normalizedSaturation = toNumber(saturation, 0);
    const normalizedBrightness = toNumber(brightness, 0);
    const cellCount = clamp(Math.round(normalizedSteps), 1, 96);
    const normalizedOctaves = clamp(
      Math.round(toNumber(numOctaves, 4)),
      1,
      10,
    );
    const normalizedVariance = clamp(toNumber(cellWidthVariance, 0.2), 0, 0.85);
    const normalizedOverlayScale = Math.max(1, toNumber(overlayScale, 1.12));
    const normalizedOverlayOpacity = toNumber(overlayOpacity, 1);
    const flipEnabled = toBoolean(flip, false);
    const shimmerEnabled = toBoolean(shimmer, false);
    const cellBackgroundImage = React.useMemo(() => toCssUrl(src), [src]);
    const colorFilter = React.useMemo(() => {
      const saturationAmount = Math.max(0, 100 + normalizedSaturation);
      const brightnessAmount = Math.max(0, 100 + normalizedBrightness);

      return `hue-rotate(${normalizedHue}deg) saturate(${saturationAmount}%) brightness(${brightnessAmount}%)`;
    }, [normalizedBrightness, normalizedHue, normalizedSaturation]);
    const cells = React.useMemo(
      () => Array.from({ length: cellCount }, (_, index) => index),
      [cellCount],
    );

    return (
      <div
        ref={ref}
        className={cn("relative isolate block overflow-hidden", className)}
        style={style}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          loading={loading}
          decoding={decoding}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
          onLoad={onImageLoad}
          onError={onImageError}
          className={cn("block h-full w-full", imageClassName)}
          style={{ objectFit, objectPosition }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0"
          focusable="false"
        >
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="turbulence"
              baseFrequency={normalizedBaseFrequency}
              numOctaves={normalizedOctaves}
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={normalizedScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 top-0 z-10 flex h-full",
            overlayClassName,
          )}
          style={{
            filter: `url(#${filterId})`,
            left: `${((1 - normalizedOverlayScale) / 2) * 100}%`,
            opacity: normalizedOverlayOpacity,
            width: `${normalizedOverlayScale * 100}%`,
          }}
        >
          {cells.map((index) => {
            const center = cellCount / 2;
            const width =
              cellCount === 1
                ? 100
                : (100 / cellCount) *
                  (1 -
                    (Math.abs(index - center) / center) * normalizedVariance);
            const transform =
              flipEnabled && index % 2 === 0 ? "scaleX(1)" : "scaleX(-1)";

            return (
              <div
                key={index}
                className="relative h-full shrink-0 overflow-hidden bg-cover"
                style={{
                  backgroundImage: cellBackgroundImage,
                  backgroundPosition: `${(index / cellCount) * 100}% 50%`,
                  filter: colorFilter,
                  flexBasis: `${width}%`,
                  transform,
                }}
              >
                {shimmerEnabled ? (
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_72%,rgba(255,255,255,0.08)_96%,rgba(255,255,255,0.65)_100%)]" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
FractalGlassImage.displayName = "FractalGlassImage";

export { FractalGlassImage };
export type { FractalGlassImageProps };
