import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenResult, TokenState } from "../../../models";
import { getToken } from "../../../services";
import { RootState } from "../../../app";
import { clearLocalStorage, keyToken, persistLocalStorage } from "../../../utilities";

export const initialStateToken: TokenState = {
  tokenResult: null,
  error: "",
  loading: false,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: localStorage.getItem(keyToken)
    ? {
        ...initialStateToken,
        tokenResult: {
            refresh: localStorage.getItem(keyToken),
            access : localStorage.getItem(keyToken),
        },
      }
    : initialStateToken,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => {
      state.loading = true;
      state.error = "";
      // Limpiamos el 
      clearLocalStorage(keyToken);
    });
    builder.addCase(
      getToken.fulfilled,
      (state, action: PayloadAction<TokenResult>) => {
        state.tokenResult = action.payload;
        state.loading = false;
        action.payload.access ? persistLocalStorage<string>(keyToken, action.payload.access) : null;
      }
    );
    builder.addCase(getToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.code ?? "";
    });
  },
});

// Selectors
export const selectToken = (state: RootState) => state.token.tokenResult?.access;
export const selectTokenLoading = (state: RootState) => state.token.loading;
export const selectTokenError = (state: RootState) => state.token.error;

export default tokenSlice.reducer;
