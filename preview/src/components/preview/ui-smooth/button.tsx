import {
  Button,
  type ButtonHue,
  type ButtonSize,
  type ButtonVariant,
} from "../../ui-smooth/button";
import { type TuplifyUnion } from "../tuplify-union.type";
import { Sun } from "lucide-react";

const ButtonPreview = () => {
  const variants: TuplifyUnion<ButtonVariant> = [
    "primary",
    "secondary",
    "destructive",
    "ghost",
    "link",
    "outline",
  ];
  const hues: TuplifyUnion<ButtonHue> = [
    "none",
    "teal",
    "blue",
    "pink",
    "red",
    "yellow",
  ];
  const sizes: TuplifyUnion<ButtonSize> = ["xs", "sm", "default", "lg", "icon"];

  return (
    <>
      <div className="flex flex-col gap-2 rounded-lg border p-4">
        <h2>Button</h2>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3>Variants</h3>
            {variants.map((variant) => {
              return (
                <Button variant={variant} key={variant} className="max-w-min">
                  variant: {variant}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Sizes</h3>
            {sizes.map((size) => {
              if (size === "icon") {
                return (
                  <Button variant="primary" size="icon" key={size}>
                    <Sun />
                  </Button>
                );
              }
              return (
                <Button
                  variant="primary"
                  size={size}
                  key={size}
                  className="max-w-min"
                >
                  size: {size}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Hue</h3>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
                return (
                  <Button variant="primary" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
                return (
                  <Button variant="secondary" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
                return (
                  <Button variant="destructive" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
                return (
                  <Button variant="ghost" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
                return (
                  <Button variant="link" hue={hue} key={hue}>
                    hue: {hue}
                  </Button>
                );
              })}
            </span>
            <span className="flex w-fit flex-row flex-wrap gap-2">
              {hues.map((hue) => {
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
