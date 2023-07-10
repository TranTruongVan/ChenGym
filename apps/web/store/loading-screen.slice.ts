import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface LoadingScreenState {
  display: boolean;
}

const initialState: LoadingScreenState = {
  display: false,
};

export const loadingScreenSlice = createSlice({
  name: "loadingScreen",

  initialState,

  reducers: {
    displayLoadingScreen: (state) => {
      state.display = true;
    },
    hiddenLoadingScreen: (state) => {
      state.display = false;
    },
  },
});

export const { displayLoadingScreen, hiddenLoadingScreen } =
  loadingScreenSlice.actions;

export const selectLoadingScreen = (state: RootState) => state.loadingScreen;

export const loadingScreenReducer = loadingScreenSlice.reducer;
