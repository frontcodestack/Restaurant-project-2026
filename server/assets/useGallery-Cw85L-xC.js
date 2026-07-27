import { useQuery } from "@tanstack/react-query";
import { S as STRAPI_URL, g as getStrapiMedia } from "./strapi-DoZBEunp.js";
const fetchGallery = async () => {
  const res = await fetch(
    `${STRAPI_URL}/api/galleries?populate[image][fields]=url`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch gallery.");
  }
  const { data } = await res.json();
  return data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    category: item.category,
    ratio: item.ratio,
    image: getStrapiMedia(item.image?.url)
  }));
};
function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery
  });
}
export {
  useGallery as u
};
