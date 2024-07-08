import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

const appstore = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof appstore.getState>;

export default appstore;
