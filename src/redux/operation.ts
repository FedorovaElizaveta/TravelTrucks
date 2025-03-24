import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Vehicle } from "./slice.ts";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getVehicles = createAsyncThunk<
  { total: number; items: Vehicle[] },
  { query?: string } | undefined,
  { rejectValue: string }
>(
  "vehicle/getVehicles",
  async ({ query } = {}, { rejectWithValue }) => {
    try {
      const response = await axios(`/campers?${query}`);
      return { total: response.data.total, items: response.data.items };
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Unknown error");
    }
  },
  {}
);

export const getFilteredVehicles = createAsyncThunk<
  { total: number; items: Vehicle[] },
  { query: string },
  { rejectValue: string }
>("vehicle/getFilteredVehicles", async ({ query }, { rejectWithValue }) => {
  try {
    const response = await axios(`/campers?${query}`);
    return { total: response.data.total, items: response.data.items };
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue("Unknown error");
  }
});
