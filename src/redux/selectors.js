export const selectVehicles = (state) => state.vehicle.vehicle;
export const selectFilters = (state) => state.vehicle.filters;
export const selectFavouriteVehicles = (state) =>
  state.vehicle.favouriteVehicles;
export const selectActiveVehicle = (state) => state.vehicle.activeVehicle;
export const selectPage = (state) => state.vehicle.page;
export const selectLimit = (state) => state.vehicle.limit;
