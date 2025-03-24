import { Filters } from "../redux/slice.ts";

export const createQueryString = (
  filters: Filters | null,
  page: number,
  limit: number
) => {
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (filters) {
    if (filters.location) searchParams.append("location", filters.location);

    if (filters.equipment.length > 0) {
      filters.equipment.forEach((feature) =>
        searchParams.append(feature, "true")
      );
    }

    if (filters.bodyType.length > 0) {
      searchParams.set("form", filters.bodyType.join("|"));
    }
  }

  return searchParams.toString();
};
