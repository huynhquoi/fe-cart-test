import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";
export const store = configureStore({
  reducer: { sliceReducer: sliceReducer },
});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
