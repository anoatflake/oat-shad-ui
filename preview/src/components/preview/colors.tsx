const ColorPreview = () => {
  const colorNames = [
    "slate",
    "teal_background",
    "skin",
    "blood_shot_eyes",
    "eva_danger",
    "gold",
    "aqua_green",
    "evergreen",
    "periwinkle",
    "cornflower",
    "apricot",
    "rust",
    "charcoal",
    "outer_space",
  ];

  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Color Palatte</h2>
      <div className="flex flex-col items-center gap-4 p-12">
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-slate-50"></span>
          <span className="h-8 w-8 bg-slate-100"></span>
          <span className="h-8 w-8 bg-slate-200"></span>
          <span className="h-8 w-8 bg-slate-300"></span>
          <span className="h-8 w-8 bg-slate-400"></span>
          <span className="h-8 w-8 bg-slate-500"></span>
          <span className="h-8 w-8 bg-slate-600"></span>
          <span className="h-8 w-8 bg-slate-700"></span>
          <span className="h-8 w-8 bg-slate-800"></span>
          <span className="h-8 w-8 bg-slate-900"></span>
          <span className="h-8 w-8 bg-slate-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-teal_background-50"></span>
          <span className="h-8 w-8 bg-teal_background-100"></span>
          <span className="h-8 w-8 bg-teal_background-200"></span>
          <span className="h-8 w-8 bg-teal_background-300"></span>
          <span className="h-8 w-8 bg-teal_background-400"></span>
          <span className="h-8 w-8 bg-teal_background-500"></span>
          <span className="h-8 w-8 bg-teal_background-600"></span>
          <span className="h-8 w-8 bg-teal_background-700"></span>
          <span className="h-8 w-8 bg-teal_background-800"></span>
          <span className="h-8 w-8 bg-teal_background-900"></span>
          <span className="h-8 w-8 bg-teal_background-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-skin-50"></span>
          <span className="h-8 w-8 bg-skin-100"></span>
          <span className="h-8 w-8 bg-skin-200"></span>
          <span className="h-8 w-8 bg-skin-300"></span>
          <span className="h-8 w-8 bg-skin-400"></span>
          <span className="h-8 w-8 bg-skin-500"></span>
          <span className="h-8 w-8 bg-skin-600"></span>
          <span className="h-8 w-8 bg-skin-700"></span>
          <span className="h-8 w-8 bg-skin-800"></span>
          <span className="h-8 w-8 bg-skin-900"></span>
          <span className="h-8 w-8 bg-skin-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-blood_shot_eyes-50"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-100"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-200"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-300"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-400"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-500"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-600"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-700"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-800"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-900"></span>
          <span className="h-8 w-8 bg-blood_shot_eyes-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-eva_danger-50"></span>
          <span className="h-8 w-8 bg-eva_danger-100"></span>
          <span className="h-8 w-8 bg-eva_danger-200"></span>
          <span className="h-8 w-8 bg-eva_danger-300"></span>
          <span className="h-8 w-8 bg-eva_danger-400"></span>
          <span className="h-8 w-8 bg-eva_danger-500"></span>
          <span className="h-8 w-8 bg-eva_danger-600"></span>
          <span className="h-8 w-8 bg-eva_danger-700"></span>
          <span className="h-8 w-8 bg-eva_danger-800"></span>
          <span className="h-8 w-8 bg-eva_danger-900"></span>
          <span className="h-8 w-8 bg-eva_danger-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="h-8 w-8 bg-gold-50"></span>
          <span className="h-8 w-8 bg-gold-100"></span>
          <span className="h-8 w-8 bg-gold-200"></span>
          <span className="h-8 w-8 bg-gold-300"></span>
          <span className="h-8 w-8 bg-gold-400"></span>
          <span className="h-8 w-8 bg-gold-500"></span>
          <span className="h-8 w-8 bg-gold-600"></span>
          <span className="h-8 w-8 bg-gold-700"></span>
          <span className="h-8 w-8 bg-gold-800"></span>
          <span className="h-8 w-8 bg-gold-900"></span>
          <span className="h-8 w-8 bg-gold-950"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-aqua_green-50 h-8 w-8"></span>
          <span className="bg-aqua_green-100 h-8 w-8"></span>
          <span className="bg-aqua_green-200 h-8 w-8"></span>
          <span className="bg-aqua_green-300 h-8 w-8"></span>
          <span className="bg-aqua_green-400 h-8 w-8"></span>
          <span className="bg-aqua_green-500 h-8 w-8"></span>
          <span className="bg-aqua_green-600 h-8 w-8"></span>
          <span className="bg-aqua_green-700 h-8 w-8"></span>
          <span className="bg-aqua_green-800 h-8 w-8"></span>
          <span className="bg-aqua_green-900 h-8 w-8"></span>
          <span className="bg-aqua_green-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-evergreen-50 h-8 w-8"></span>
          <span className="bg-evergreen-100 h-8 w-8"></span>
          <span className="bg-evergreen-200 h-8 w-8"></span>
          <span className="bg-evergreen-300 h-8 w-8"></span>
          <span className="bg-evergreen-400 h-8 w-8"></span>
          <span className="bg-evergreen-500 h-8 w-8"></span>
          <span className="bg-evergreen-600 h-8 w-8"></span>
          <span className="bg-evergreen-700 h-8 w-8"></span>
          <span className="bg-evergreen-800 h-8 w-8"></span>
          <span className="bg-evergreen-900 h-8 w-8"></span>
          <span className="bg-evergreen-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-apricot-50 h-8 w-8"></span>
          <span className="bg-apricot-100 h-8 w-8"></span>
          <span className="bg-apricot-200 h-8 w-8"></span>
          <span className="bg-apricot-300 h-8 w-8"></span>
          <span className="bg-apricot-400 h-8 w-8"></span>
          <span className="bg-apricot-500 h-8 w-8"></span>
          <span className="bg-apricot-600 h-8 w-8"></span>
          <span className="bg-apricot-700 h-8 w-8"></span>
          <span className="bg-apricot-800 h-8 w-8"></span>
          <span className="bg-apricot-900 h-8 w-8"></span>
          <span className="bg-apricot-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-rust-50 h-8 w-8"></span>
          <span className="bg-rust-100 h-8 w-8"></span>
          <span className="bg-rust-200 h-8 w-8"></span>
          <span className="bg-rust-300 h-8 w-8"></span>
          <span className="bg-rust-400 h-8 w-8"></span>
          <span className="bg-rust-500 h-8 w-8"></span>
          <span className="bg-rust-600 h-8 w-8"></span>
          <span className="bg-rust-700 h-8 w-8"></span>
          <span className="bg-rust-800 h-8 w-8"></span>
          <span className="bg-rust-900 h-8 w-8"></span>
          <span className="bg-rust-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-periwinkle-50 h-8 w-8"></span>
          <span className="bg-periwinkle-100 h-8 w-8"></span>
          <span className="bg-periwinkle-200 h-8 w-8"></span>
          <span className="bg-periwinkle-300 h-8 w-8"></span>
          <span className="bg-periwinkle-400 h-8 w-8"></span>
          <span className="bg-periwinkle-500 h-8 w-8"></span>
          <span className="bg-periwinkle-600 h-8 w-8"></span>
          <span className="bg-periwinkle-700 h-8 w-8"></span>
          <span className="bg-periwinkle-800 h-8 w-8"></span>
          <span className="bg-periwinkle-900 h-8 w-8"></span>
          <span className="bg-periwinkle-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-cornflower-50 h-8 w-8"></span>
          <span className="bg-cornflower-100 h-8 w-8"></span>
          <span className="bg-cornflower-200 h-8 w-8"></span>
          <span className="bg-cornflower-300 h-8 w-8"></span>
          <span className="bg-cornflower-400 h-8 w-8"></span>
          <span className="bg-cornflower-500 h-8 w-8"></span>
          <span className="bg-cornflower-600 h-8 w-8"></span>
          <span className="bg-cornflower-700 h-8 w-8"></span>
          <span className="bg-cornflower-800 h-8 w-8"></span>
          <span className="bg-cornflower-900 h-8 w-8"></span>
          <span className="bg-cornflower-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-charcoal-50 h-8 w-8"></span>
          <span className="bg-charcoal-100 h-8 w-8"></span>
          <span className="bg-charcoal-200 h-8 w-8"></span>
          <span className="bg-charcoal-300 h-8 w-8"></span>
          <span className="bg-charcoal-400 h-8 w-8"></span>
          <span className="bg-charcoal-500 h-8 w-8"></span>
          <span className="bg-charcoal-600 h-8 w-8"></span>
          <span className="bg-charcoal-700 h-8 w-8"></span>
          <span className="bg-charcoal-800 h-8 w-8"></span>
          <span className="bg-charcoal-900 h-8 w-8"></span>
          <span className="bg-charcoal-950 h-8 w-8"></span>
        </div>
        <div className="flex gap-4">
          <span className="bg-outer_space-50 h-8 w-8"></span>
          <span className="bg-outer_space-100 h-8 w-8"></span>
          <span className="bg-outer_space-200 h-8 w-8"></span>
          <span className="bg-outer_space-300 h-8 w-8"></span>
          <span className="bg-outer_space-400 h-8 w-8"></span>
          <span className="bg-outer_space-500 h-8 w-8"></span>
          <span className="bg-outer_space-600 h-8 w-8"></span>
          <span className="bg-outer_space-700 h-8 w-8"></span>
          <span className="bg-outer_space-800 h-8 w-8"></span>
          <span className="bg-outer_space-900 h-8 w-8"></span>
          <span className="bg-outer_space-950 h-8 w-8"></span>
        </div>
      </div>
    </div>
  );
};
export default ColorPreview;
