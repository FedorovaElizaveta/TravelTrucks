export const createQueryString = (
  page,
  filters = { location: "", equipment: [], bodyType: [] }
) => {
  const searchParams = new URLSearchParams({ page, limit: "5" });

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
