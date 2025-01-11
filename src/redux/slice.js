import { createSlice } from "@reduxjs/toolkit";
import { getVehicles } from "./operation.js";

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: {
    vehicle: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (state, { payload }) => {
      state.vehicle = payload;
    });
  },
});

export const vehicleReducer = vehicleSlice.reducer;
