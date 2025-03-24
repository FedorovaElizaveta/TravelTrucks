import { RootState } from "./store.ts";

export const selectVehicles = (state: RootState) => state.vehicle.vehicles;
export const selectFilters = (state: RootState) => state.vehicle.filters;
export const selectEquipment = (state: RootState) =>
  state.vehicle.filters.equipment;
export const selectFavouriteVehicles = (state: RootState) =>
  state.vehicle.favouriteVehicles;
export const selectActiveVehicle = (state: RootState) =>
  state.vehicle.activeVehicle;
export const selectPage = (state: RootState) => state.vehicle.page;
export const selectLimit = (state: RootState) => state.vehicle.limit;
export const selectTotal = (state: RootState) => state.vehicle.total;
