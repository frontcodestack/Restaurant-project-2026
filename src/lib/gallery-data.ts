import hero from "@/assets/hero-riad.jpg";
import courtyard from "@/assets/gallery-courtyard.jpg";
import lanterns from "@/assets/gallery-lanterns.jpg";
import spices from "@/assets/gallery-spices.jpg";
import tagine from "@/assets/dish-tagine.jpg";
import couscous from "@/assets/dish-couscous.jpg";
import pastilla from "@/assets/dish-pastilla.jpg";
import grill from "@/assets/dish-grill.jpg";
import tea from "@/assets/dish-tea.jpg";
import zaalouk from "@/assets/dish-zaalouk.jpg";
import chef from "@/assets/chef.jpg";

export type GalleryCategory = "All" | "Cuisine" | "Interiors" | "Zellij & Details" | "Atmosphere" | "Events";

export const GALLERY: { src: string; alt: string; category: Exclude<GalleryCategory, "All">; ratio: "tall" | "wide" | "square" }[] = [
  { src: hero, alt: "Riad dining room at night", category: "Interiors", ratio: "wide" },
  { src: courtyard, alt: "Mosaic courtyard with fountain", category: "Interiors", ratio: "tall" },
  { src: lanterns, alt: "Hanging Moroccan lanterns", category: "Zellij & Details", ratio: "tall" },
  { src: spices, alt: "Pyramids of Moroccan spices", category: "Zellij & Details", ratio: "square" },
  { src: tagine, alt: "Lamb tagine in clay pot", category: "Cuisine", ratio: "square" },
  { src: couscous, alt: "Couscous with vegetables", category: "Cuisine", ratio: "wide" },
  { src: pastilla, alt: "Almond pastilla dessert", category: "Cuisine", ratio: "square" },
  { src: grill, alt: "Grilled brochettes platter", category: "Cuisine", ratio: "square" },
  { src: tea, alt: "Pouring mint tea", category: "Zellij & Details", ratio: "tall" },
  { src: zaalouk, alt: "Smoked eggplant zaalouk", category: "Cuisine", ratio: "square" },
  { src: chef, alt: "Chef portrait", category: "Interiors", ratio: "tall" },
];