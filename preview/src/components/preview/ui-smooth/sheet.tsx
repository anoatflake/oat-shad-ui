import { Button } from "@/components/ui-smooth/button";
import { Input } from "@/components/ui-smooth/input";
import { Label } from "@/components/ui-smooth/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetHue,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui-smooth/sheet";

const SheetPreview = () => {
  const hues: SheetHue[] = [
    "white",
    "lightblue",
    "blue",
    "aqua",
    "greenish",
    "pollen",
    // "yellow",
    "apricot",
    // "orange",
    // "rust",
    "blush",
    // "pink",
    "periwinkle",
  ];
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Sheet</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="max-w-min">
              Color: default
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        {hues.map((hue) => {
          return (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="max-w-min">
                  Color: {hue}
                </Button>
              </SheetTrigger>
              <SheetContent hue={hue}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          );
        })}
      </div>
    </div>
  );
};
export default SheetPreview;
