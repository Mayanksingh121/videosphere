import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isMenuOpen: boolean;
  searchSuggestions: string[];
}

const initialState: AppState = {
  isMenuOpen: true,
  searchSuggestions: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestions = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setSearchSuggestion } = appSlice.actions;
export default appSlice.reducer;
