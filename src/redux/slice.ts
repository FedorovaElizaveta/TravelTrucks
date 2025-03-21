import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVehicles } from "./operation.ts";

interface Reviews {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

interface Gallery {
  thumb: string;
  original: string;
}

export interface Vehicle {
  AC: boolean;
  TV: boolean;
  bathroom: boolean;
  consumption: string;
  description: string;
  engine: string;
  form: string;
  gallery: Gallery[];
  gas: boolean;
  height: string;
  id: string;
  kitchen: boolean;
  length: string;
  location: string;
  microwave: boolean;
  name: string;
  price: number;
  radio: boolean;
  rating: number;
  refrigerator: boolean;
  reviews: Reviews[];
  tank: string;
  transmission: string;
  water: boolean;
  width: string;
}

export interface Filters {
  location: string;
  equipment: string[];
  bodyType: string[];
}

interface VehicleState {
  vehicles: Vehicle[];
  filters: Filters;
  favouriteVehicles: Vehicle[];
  activeVehicle: Vehicle | null;
  page: number;
  limit: number;
}

const initialState: VehicleState = {
  vehicles: [],
  filters: {
    location: "",
    equipment: [],
    bodyType: [],
  },
  favouriteVehicles: [],
  activeVehicle: null,
  page: 1,
  limit: 5,
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setLocationFilter(state, { payload }: PayloadAction<string>) {
      state.filters.location = payload;
    },

    toggleEquipmentFilter(state, { payload }: PayloadAction<string>) {
      const equipmentIndex = state.filters.equipment.indexOf(payload);

      if (equipmentIndex === -1) {
        state.filters.equipment.push(payload);
      } else {
        state.filters.equipment.splice(equipmentIndex, 1);
      }
    },

    toggleBodyTypeFilter(state, { payload }: PayloadAction<string>) {
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
        bodyType: [],
      };
    },

    toggleFavouriteVehicles(state, { payload }: PayloadAction<Vehicle>) {
      const favouriteVehicleIndex = state.favouriteVehicles.findIndex(
        (item) => item.id === payload.id
      );

      if (favouriteVehicleIndex === -1) {
        state.favouriteVehicles.push(payload);
      } else {
        state.favouriteVehicles.splice(favouriteVehicleIndex, 1);
      }
    },

    manageActiveVehicle(state, { payload }: PayloadAction<Vehicle | null>) {
      state.activeVehicle = payload;
    },

    incrementPage(state) {
      state.page += 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getVehicles.fulfilled,
      (state, { payload }: PayloadAction<Vehicle[]>) => {
        state.vehicles = payload;
      }
    );
  },
});

export const {
  setLocationFilter,
  toggleEquipmentFilter,
  toggleBodyTypeFilter,
  clearFilters,
  toggleFavouriteVehicles,
  manageActiveVehicle,
  incrementPage,
} = vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
