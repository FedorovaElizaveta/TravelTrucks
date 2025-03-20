import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Vehicle } from "./slice.ts";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getVehicles = createAsyncThunk<
  Vehicle[],
  { query?: string } | undefined,
  { rejectValue: string }
>(
  "vehicle/getVehicles",
  async ({ query } = {}, { rejectWithValue }) => {
    try {
      const url = query ? `/campers?${query}` : "/campers";
      const response = await axios(url);
      return response.data.items;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Unknown error");
    }
  },
  {}
);
