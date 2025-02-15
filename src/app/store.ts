import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/slices/token";
import pacientesReducer from "../features/slices/pacientes";
import { PacientesState, TokenState } from "../models";

interface AppStore {
  token: TokenState;
  pacientes: PacientesState;
}

const store = configureStore<AppStore>({
  reducer: {
    token: tokenReducer,
    pacientes: pacientesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export default store;