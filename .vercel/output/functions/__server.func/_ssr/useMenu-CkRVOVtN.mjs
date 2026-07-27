import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as STRAPI_URL, g as getStrapiMedia } from "./strapi-DoZBEunp.mjs";
const fetchMenu = async () => {
  const res = await fetch(
    `${STRAPI_URL}/api/menus?populate[image][fields]=url`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch menu.");
  }
  const { data } = await res.json();
  return data.map((item) => ({
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
    image: getStrapiMedia(item.image?.url)
  }));
};
function useMenu() {
  return useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenu
  });
}
export {
  useMenu as u
};
