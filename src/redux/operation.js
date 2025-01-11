import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getVehicles = createAsyncThunk(
  "vehicle/getVehicles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/campers");
      return response.data.items;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
  {}
);
