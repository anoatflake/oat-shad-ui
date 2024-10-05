import { Button, buttonVariants } from "../../ui/button";
import { type VariantProps } from "class-variance-authority";
import { type TuplifyUnion } from "../tuplify-union.type";
import { Sun } from "lucide-react";

type ButtonVariants = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
type ButtonHues = NonNullable<VariantProps<typeof buttonVariants>["hue"]>;
type ButtonSizes = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

const ButtonPreview = () => {
  const variants: TuplifyUnion<ButtonVariants> = [
    "primary",
    "secondary",
    "destructive",
    "ghost",
    "link",
    "outline",
  ];
  const hues: TuplifyUnion<ButtonHues> = [
    "none",
    "teal",
    "blue",
    "pink",
    "red",
    "yellow",
  ];
  const sizes: TuplifyUnion<ButtonSizes> = [
    "xs",
    "sm",
    "default",
    "lg",
    "icon",
  ];

  return (
    <>
      <div className="flex flex-col gap-2 rounded border p-4">
        <h2>Button</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h3>Variants</h3>
            {variants.map((variant: ButtonVariants) => {
              return (
                <Button variant={variant} key={variant}>
                  variant: {variant}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Sizes</h3>
            {sizes.map((size: ButtonSizes) => {
              if (size === "icon") {
                return (
                  <Button variant="primary" size="icon" key={size}>
                    <Sun />
                  </Button>
                );
              }
              return (
                <Button variant="primary" size={size} key={size}>
                  size: {size}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Hue</h3>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="primary" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="secondary" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="destructive" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="ghost" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="link" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex gap-2">
              {hues.map((hue: ButtonHues) => {
                return (
                  <Button variant="outline" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ButtonPreview;
