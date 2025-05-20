import { type VariantProps } from "class-variance-authority";
import { type TuplifyUnion } from "../tuplify-union.type";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants,
} from "../../ui-brutal/alert";

type AlertVariants = NonNullable<VariantProps<typeof alertVariants>["variant"]>;

const AlertPreview = () => {
  const variants: TuplifyUnion<AlertVariants> = ["default", "destructive"];

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Alert</h2>
      {variants.map((variant) => {
        return (
          <Alert variant={variant} key={variant}>
            <AlertTitle>variant: {variant}</AlertTitle>
            <AlertDescription>Lorem Ipsum</AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
};
export default AlertPreview;
