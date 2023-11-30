import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { carsSlice } from "./slice";

// const combinedReducers = combineReducers({
//   cars: carReducer,
// });

export const store = configureStore({
  // reducer: combinedReducers,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  reducer: {
    cars: carsSlice.reducer,
  },
});
export const persistor = persistStore(store);
