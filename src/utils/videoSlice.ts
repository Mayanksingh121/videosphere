import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: [],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addPopularVideos } = videoSlice.actions;
export default videoSlice.reducer;
