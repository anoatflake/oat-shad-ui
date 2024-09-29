import { type VariantProps } from "class-variance-authority";
import { Badge, badgeVariants } from "../../ui/badge";
import { type TuplifyUnion } from "../tuplify-union.type";

type BadgeVariants = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

const BadgePreview = () => {
  const variants: TuplifyUnion<BadgeVariants> = [
    "default",
    "secondary",
    "destructive",
    "outline",
  ];

  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Badge</h2>
      <div className="flex flex-row gap-2">
        {variants.map((variant) => {
          return (
            <Badge variant={variant} key={variant}>
              variant: {variant}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
export default BadgePreview;
