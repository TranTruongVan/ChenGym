import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

// Define a type for the slice state
interface AuthFormState {
  display: boolean;
  type: AuthFormType;
}

// Define the initial state using that type
const initialState: AuthFormState = {
  display: false,
  type: "signin",
};

export const authFormSlice = createSlice({
  name: "authForm",

  initialState,

  reducers: {
    displaySignInForm: (state) => {
      state.display = true;
      state.type = "signin";
    },
    displaySignUpForm: (state) => {
      state.display = true;
      state.type = "signup";
    },
    hiddenAuthForm: (state) => {
      state.display = false;
    },
  },
});

export const { displaySignInForm, displaySignUpForm, hiddenAuthForm } =
  authFormSlice.actions;

export const selectAuthForm = (state: RootState) => state.authForm;

export const authFormReducer = authFormSlice.reducer;
