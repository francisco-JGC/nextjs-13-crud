import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
