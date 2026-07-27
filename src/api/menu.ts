import { STRAPI_URL, getStrapiMedia } from "@/lib/strapi";
import type { MenuItem } from "@/types/menu";

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const res = await fetch(
    `${STRAPI_URL}/api/menus?populate[image][fields]=url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch menu.");
  }

  const { data } = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,

    name_en: item.name_en,
    description_en: item.description_en,

    name_fr: item.name_fr,
    description_fr: item.description_fr,

    name_ar: item.name_ar,
    description_ar: item.description_ar,

    price: item.price,

    category: item.category,

    popular: item.popular ?? false,
    spicy: item.spicy ?? false,
    vegetarian: item.vegetarian ?? false,

    rating: item.rating,

    image: getStrapiMedia(item.image?.url),
  }));
};