export const STRAPI_URL ="http://localhost:1337"

export const getStrapiMedia = (url?: string | null): string => {
  if (!url) return "/placeholder.webp";

  // Already an absolute URL
  if (url.startsWith("http")) {
    return url;
  }

  return `${STRAPI_URL}${url.startsWith("/") ? url : `/${url}`}`;
};