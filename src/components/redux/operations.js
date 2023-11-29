import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6567096364fcff8d730f9c53.mockapi.io/api/v1";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
