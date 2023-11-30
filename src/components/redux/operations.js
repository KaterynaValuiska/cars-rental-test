import axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6567096364fcff8d730f9c53.mockapi.io/api/v1";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addTask = createAction("cars/addOrders");
// export const addOrders = createAsyncThunk(
//   "cars/addOrders",
//   async (item, thunkAPI) => {
//     try {
//       let orders = [];
//       orders.push(item);
//       console.log("order", orders);
//       return orders;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const favoriteCar = createAsyncThunk(
//   "cars/favoriteCar",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`/cars/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
