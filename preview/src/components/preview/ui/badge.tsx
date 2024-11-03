import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Badge, BadgeHue, BadgeVariant } from "../../ui/badge";
import { type TuplifyUnion } from "../tuplify-union.type";
import { AccordionTrigger } from "@radix-ui/react-accordion";

const BadgePreview = () => {
  const variants: TuplifyUnion<BadgeVariant> = [
    "default",
    "secondary",
    "destructive",
    "outline",
  ];
  const hues: BadgeHue[] = [
    "none",
    "lightblue",
    "blue",
    "aqua",
    "pollen",
    "yellow",
    "apricot",
    "orange",
    "rust",
    "blush",
    "pink",
    "periwinkle",
    "greenish",
  ];
  const textArr: string[] = [
    "New",
    "Sale",
    "Featured",
    "Exclusive",
    "Limited Edition",
    "Trending",
    "Hot",
    "Coming Soon",
    "Just Arrived",
    "Member Only",
    "Top Rated",
    "Special Offer",
    "In Stock",
    "Limited Time",
    "New In",
  ];

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Badge</h2>
      <div className="flex flex-row flex-wrap gap-2">
        <h3>Variants</h3>
        {variants.map((variant) => {
          return (
            <Badge variant={variant} key={variant} hue="none">
              variant: {variant}
            </Badge>
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        <h3>Hues</h3>
        {hues.map((hue) => {
          return (
            <Badge hue={hue} key={hue}>
              color: {hue}
            </Badge>
          );
        })}
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3>other badge colors</h3>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-teal_background-200">color test</Badge>
              <Badge className="bg-teal_background-300">color test</Badge>
              <Badge className="bg-teal_background-400">color test</Badge>
              <Badge className="bg-teal_background-500">color test</Badge>
              <Badge className="bg-teal_background-600">color test</Badge>
              <Badge className="bg-teal_background-700">color test</Badge>
              <Badge className="bg-teal_background-800">color test</Badge>
              teal background
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-blue_chill-200">color test</Badge>
              <Badge className="bg-blue_chill-300">color test</Badge>
              <Badge className="bg-blue_chill-400">color test</Badge>
              <Badge className="bg-blue_chill-500">color test</Badge>
              <Badge className="bg-blue_chill-600">color test</Badge>
              <Badge className="bg-blue_chill-700">color test</Badge>
              blue chill
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-aqua_green-200">color test</Badge>
              <Badge className="bg-aqua_green-300">color test</Badge>
              <Badge className="bg-aqua_green-400">color test</Badge>
              <Badge className="bg-aqua_green-500">color test</Badge>
              <Badge className="bg-aqua_green-600">color test</Badge>
              <Badge className="bg-aqua_green-700">color test</Badge>
              aqua green
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-evergreen-200">color test</Badge>
              <Badge className="bg-evergreen-300">color test</Badge>
              <Badge className="bg-evergreen-400">color test</Badge>
              <Badge className="bg-evergreen-500">color test</Badge>
              evergreen
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-fall_green-200">color test</Badge>
              <Badge className="bg-fall_green-300">color test</Badge>
              <Badge className="bg-fall_green-400">color test</Badge>
              <Badge className="bg-fall_green-500">color test</Badge>
              <Badge className="bg-fall_green-600">color test</Badge>
              fall green
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-gold-200">color test</Badge>
              <Badge className="bg-gold-300">color test</Badge>
              <Badge className="bg-gold-400">color test</Badge>
              <Badge className="bg-gold-500">color test</Badge>
              <Badge className="bg-gold-600">color test</Badge>
              <Badge className="bg-gold-700">color test</Badge>
              <Badge className="bg-gold-800">color test</Badge>
              gold
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-mustard-200">color test</Badge>
              <Badge className="bg-mustard-300">color test</Badge>
              <Badge className="bg-mustard-400">color test</Badge>
              <Badge className="bg-mustard-500">color test</Badge>
              <Badge className="bg-mustard-600">color test</Badge>
              mustard
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-apricot-200">color test</Badge>
              <Badge className="bg-apricot-300">color test</Badge>
              <Badge className="bg-apricot-400">color test</Badge>
              <Badge className="bg-apricot-500">color test</Badge>
              <Badge className="bg-apricot-600">color test</Badge>
              apricot
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-rust-200">color test</Badge>
              <Badge className="bg-rust-300">color test</Badge>
              <Badge className="bg-rust-400">color test</Badge>
              <Badge className="bg-rust-500">color test</Badge>
              {/* <Badge className="bg-rust-600">color test</Badge> */}
              rust
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-blood_shot_eyes-200">color test</Badge>
              <Badge className="bg-blood_shot_eyes-300">color test</Badge>
              <Badge className="bg-blood_shot_eyes-400">color test</Badge>
              <Badge className="bg-blood_shot_eyes-500">color test</Badge>
              blood shot eyes
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-hopbush-200">color test</Badge>
              <Badge className="bg-hopbush-300">color test</Badge>
              <Badge className="bg-hopbush-400">color test</Badge>
              <Badge className="bg-hopbush-500">color test</Badge>
              <Badge className="bg-hopbush-600">color test</Badge>
              hopbush
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-cotton_candy-200">color test</Badge>
              <Badge className="bg-cotton_candy-300">color test</Badge>
              <Badge className="bg-cotton_candy-400">color test</Badge>
              <Badge className="bg-cotton_candy-500">color test</Badge>
              <Badge className="bg-cotton_candy-600">color test</Badge>
              cotton candy
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-eva_danger-200">color test</Badge>
              <Badge className="bg-eva_danger-300">color test</Badge>
              <Badge className="bg-eva_danger-400">color test</Badge>
              <Badge className="bg-eva_danger-500">color test</Badge>
              <Badge className="bg-eva_danger-600">color test</Badge>
              eva danger
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-royal_purple-200">color test</Badge>
              <Badge className="bg-royal_purple-300">color test</Badge>
              <Badge className="bg-royal_purple-400">color test</Badge>
              <Badge className="bg-royal_purple-500">color test</Badge>
              royal purple
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-skin-200">color test</Badge>
              <Badge className="bg-skin-300">color test</Badge>
              <Badge className="bg-skin-400">color test</Badge>
              <Badge className="bg-skin-500">color test</Badge>
              skin
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-periwinkle-200">color test</Badge>
              <Badge className="bg-periwinkle-300">color test</Badge>
              <Badge className="bg-periwinkle-400">color test</Badge>
              <Badge className="bg-periwinkle-500">color test</Badge>
              periwnkle
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-cornflower-200">color test</Badge>
              <Badge className="bg-cornflower-300">color test</Badge>
              <Badge className="bg-cornflower-400">color test</Badge>
              <Badge className="bg-cornflower-500">color test</Badge>
              cornflower
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-charcoal-200">color test</Badge>
              <Badge className="bg-charcoal-300">color test</Badge>
              <Badge className="bg-charcoal-400">color test</Badge>
              <Badge className="bg-charcoal-500">color test</Badge>
              charcoal
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-outer_space-200">color test</Badge>
              <Badge className="bg-outer_space-300">color test</Badge>
              <Badge className="bg-outer_space-400">color test</Badge>
              outer space
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Badge className="bg-slate-200">color test</Badge>
              <Badge className="bg-slate-300">color test</Badge>
              <Badge className="bg-slate-400">color test</Badge>
              slate
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-row flex-wrap gap-2">
        <h3>Generated Hues based on string</h3>
        {textArr.map((text) => {
          return <Badge key={text}>{text}</Badge>;
        })}
      </div>
    </div>
  );
};
export default BadgePreview;
