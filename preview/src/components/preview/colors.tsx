import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ColorPreview = () => {
  // const colorNames = [
  //   "teal_background",
  //   "aqua_green",
  //   "evergreen",
  //   "gold",
  //   "apricot",
  //   "rust",
  //   "blood_shot_eyes",
  //   "eva_danger",
  //   "skin",
  //   "periwinkle",
  //   "cornflower",
  //   "charcoal",
  //   "outer_space",
  //   "slate",
  // ];

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Color Palatte</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-center gap-2 md:gap-4 md:px-12">
              <h3 className="w-full text-left">teal background</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-teal_background-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-teal_background-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">aqua green</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-aqua_green-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-aqua_green-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">evergreen</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-evergreen-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-evergreen-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">fall green</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-fall_green-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-fall_green-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">gold</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-gold-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-gold-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">mustard</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-mustard-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-mustard-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">apricot</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-apricot-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-apricot-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">tw red</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-red-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-red-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">rust</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-rust-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-rust-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">blood shot eyes</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-blood_shot_eyes-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blood_shot_eyes-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">cotton candy</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-cotton_candy-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cotton_candy-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">hopbush</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-hopbush-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-hopbush-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">eva danger</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-eva_danger-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-eva_danger-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">royal purple</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-royal_purple-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-royal_purple-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">blue chill</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-blue_chill-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-blue_chill-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">skin</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-skin-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-skin-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">periwinkle</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-periwinkle-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-periwinkle-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">cornflower</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-cornflower-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-cornflower-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">charcoal</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-charcoal-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-charcoal-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">outer space</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-outer_space-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-outer_space-950 sm:w-12 lg:w-16"></span>
              </div>
              <h3 className="w-full text-left">slate</h3>
              <div className="flex gap-1 lg:gap-4">
                <span className="h-8 w-6 bg-slate-50 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-100 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-200 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-300 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-400 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-500 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-600 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-700 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-800 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-900 sm:w-12 lg:w-16"></span>
                <span className="h-8 w-6 bg-slate-950 sm:w-12 lg:w-16"></span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default ColorPreview;
