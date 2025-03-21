import { Filters } from "../redux/slice.ts";

export const createQueryString = (
  filters: Filters = { location: "", equipment: [], bodyType: [] },
  page: number,
  limit: number
) => {
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (filters.location) searchParams.append("location", filters.location);

  if (filters.equipment.length > 0) {
    filters.equipment.forEach((feature) =>
      searchParams.append(feature, "true")
    );
  }

  if (filters.bodyType.length > 0) {
    filters.bodyType.forEach((type) => searchParams.append("form", type));
  }

  return searchParams.toString();
};
