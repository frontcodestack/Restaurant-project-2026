import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "@/api/gallery";

export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
  });
}