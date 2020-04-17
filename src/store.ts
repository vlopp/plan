import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({ test: (store, act) => 2 }),
});
