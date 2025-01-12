import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getVehicles = createAsyncThunk(
  "vehicle/getVehicles",
  async (query, { rejectWithValue }) => {
    try {
      const url = query ? `/campers?${query}` : "/campers";
      const response = await axios(url);
      return response.data.items;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
  {}
);
