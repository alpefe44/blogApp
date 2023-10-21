import { configureStore } from "@reduxjs/toolkit";
import blogslice from "./slices/blogSlice";


export const store = configureStore({
  reducer: {
    blog: blogslice
  }
})