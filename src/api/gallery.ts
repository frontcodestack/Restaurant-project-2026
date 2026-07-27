import { STRAPI_URL, getStrapiMedia } from "@/lib/strapi";
import type { GalleryItem } from "@/types/gallery";

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const res = await fetch(
    `${STRAPI_URL}/api/galleries?populate[image][fields]=url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gallery.");
  }

  const { data } = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,

    title: item.title,

    category: item.category,
    ratio: item.ratio,

    image: getStrapiMedia(item.image?.url),
  }));
};