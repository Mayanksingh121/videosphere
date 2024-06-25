import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appstore = configureStore({
  reducer: {
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof appstore.getState>;

export default appstore;
