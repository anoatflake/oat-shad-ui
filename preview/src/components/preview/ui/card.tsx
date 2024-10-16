import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHue,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const CardPreview = () => {
  const hues: CardHue[] = [
    "none",
    "white",
    "lightblue",
    "blue",
    "aqua",
    "greenish",
    "pollen",
    "yellow",
    "apricot",
    "orange",
    "rust",
    "blush",
    "pink",
    "periwinkle",
  ];

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Card</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {hues.map((hue) => {
          return (
            <Card className="w-max lg:w-[350px]" hue={hue}>
              <CardHeader>
                <CardTitle>Color: {hue}</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button hue="yellow">Deploy</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardPreview;
