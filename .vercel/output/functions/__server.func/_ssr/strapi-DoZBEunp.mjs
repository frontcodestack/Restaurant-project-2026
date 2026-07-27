const STRAPI_URL = "http://localhost:1337";
const getStrapiMedia = (url) => {
  if (!url) return "/placeholder.webp";
  if (url.startsWith("http")) {
    return url;
  }
  return `${STRAPI_URL}${url.startsWith("/") ? url : `/${url}`}`;
};
export {
  STRAPI_URL as S,
  getStrapiMedia as g
};
