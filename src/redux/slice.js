import { createSlice } from "@reduxjs/toolkit";
import { getVehicles } from "./operation.js";

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: {
    vehicle: [],
    filters: {
      location: "",
      equipment: [],
      bodyType: [],
    },
    favouriteVehicles: [],
    activeVehicle: null,
  },
  reducers: {
    setLocationFilter(state, { payload }) {
      state.filters.location = payload;
    },

    toggleEquipmentFilter(state, { payload }) {
      const equipmentIndex = state.filters.equipment.indexOf(payload);

      if (equipmentIndex === -1) {
        state.filters.equipment.push(payload);
      } else {
        state.filters.equipment.splice(equipmentIndex, 1);
      }
    },

    toggleBodyTypeFilter(state, { payload }) {
      const bodyTypeIndex = state.filters.bodyType.indexOf(payload);

      if (bodyTypeIndex === -1) {
        state.filters.bodyType.push(payload);
      } else {
        state.filters.bodyType.splice(bodyTypeIndex, 1);
      }
    },

    clearFilters(state) {
      state.filters = {
        location: "",
        equipment: [],
        type: [],
      };
    },

    toggleFavouriteVehicles(state, { payload }) {
      const favouriteVehicleIndex = state.favouriteVehicles.findIndex(
        (item) => item.id === payload.id
      );

      if (favouriteVehicleIndex === -1) {
        state.favouriteVehicles.push(payload);
      } else {
        state.favouriteVehicles.splice(favouriteVehicleIndex, 1);
      }
    },

    manageActiveVehicle(state, { payload }) {
      state.activeVehicle = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (state, { payload }) => {
      state.vehicle = payload;
    });
  },
});

export const {
  setLocationFilter,
  toggleEquipmentFilter,
  toggleBodyTypeFilter,
  clearFilters,
  toggleFavouriteVehicles,
  manageActiveVehicle,
} = vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
