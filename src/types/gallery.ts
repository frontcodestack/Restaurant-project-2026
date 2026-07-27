export type GalleryCategory =
  | "Cuisine"
  | "Interiors"
  | "Zellij & Details"
  | "Atmosphere"
  | "Events";

export type GalleryRatio = "square" | "wide" | "tall";

export interface GalleryItem {
  id: number;
  documentId: string;

  title: string;

  category: GalleryCategory;

  ratio: GalleryRatio;

  image: string;
}