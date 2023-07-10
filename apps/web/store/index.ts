import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@web/store/counter.slice";
import { authFormReducer } from "@web/store/auth-form.slice";
import { loadingScreenReducer } from "@web/store/loading-screen.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authForm: authFormReducer,
    loadingScreen: loadingScreenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
