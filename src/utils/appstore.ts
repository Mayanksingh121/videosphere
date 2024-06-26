import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";

const appstore = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
  },
});

export type RootState = ReturnType<typeof appstore.getState>;

export default appstore;
