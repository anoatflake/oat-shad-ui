import { Button, buttonVariants } from "../../ui/button";
import { type VariantProps } from "class-variance-authority";
import { type TuplifyUnion } from "../tuplify-union.type";

type ButtonVariants = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
type ButtonSizes = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

const ButtonPreview = () => {
  const variants: TuplifyUnion<ButtonVariants> = [
    "default",
    "secondary",
    "destructive",
    "ghost",
    "link",
    "outline",
  ];
  const sizes: TuplifyUnion<ButtonSizes> = ["default", "sm", "lg", "icon"];

  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Button</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h3>Variants</h3>
          {variants.map((variant) => {
            return (
              <Button variant={variant} key={variant}>
                variant: {variant}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <h3>Sizes</h3>
          {sizes.map((size) => {
            return (
              <Button size={size} key={size}>
                size: {size}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ButtonPreview;
