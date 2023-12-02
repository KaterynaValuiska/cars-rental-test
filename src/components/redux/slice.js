import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    orders: [],
    filter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    addOrders(state, action) {
      state.orders.push(action.payload);
    },
    filterCar(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected),
  // .addCase(addOrders, (state, action) => {
  //   state.orders = action.payload;
  //   // state.orders.push(action.payload);
  //   console.log(state.orders);
  // }),
  // {
  //   [fetchCars.pending]: handlePending,
  //   [fetchCars.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchCars.rejected]: handleRejected,
  // },
});
// export const carReducer = carsSlice.reducer;
export const { addOrders, filterCar } = carsSlice.actions;
