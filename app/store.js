import { configureStore } from "@reduxjs/toolkit";
import profilesSliceReducer from "../features/profiles/profilesSlice";

export const store = configureStore({
  reducer: {
    profilesSlice: profilesSliceReducer,
  },
});
