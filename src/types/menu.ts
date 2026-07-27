export type MenuCategory =
  | "Starters"
  | "Tagines"
  | "Couscous"
  | "Grills"
  | "Desserts"
  | "Drinks";

export interface MenuItem {
  id: number;
  documentId: string;

  name_en: string;
  description_en: string;

  name_fr: string;
  description_fr: string;

  name_ar: string;
  description_ar: string;

  price: number;

  category: MenuCategory;

  popular: boolean;
  spicy: boolean;
  vegetarian: boolean;

  rating?: number;
  reviews?: number;

  image: string;
}