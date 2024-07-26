import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PacienteResult, PacientesState } from "../../../models";
import { RootState } from "../../../app";
import { getPacientes } from "../../../services";

export const initialStatePacientes: PacientesState = {
  pacientesResult: [],
  error: "",
  loading: false,
};

export const pacientesSlice = createSlice({
  name: "pacientes",
  initialState: initialStatePacientes,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacientes.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      getPacientes.fulfilled,
      (state, action: PayloadAction<PacienteResult[]>) => {
        state.pacientesResult = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getPacientes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.code ?? "";
    });
  },
});

// Selectors
export const selectPacientes = (state: RootState) =>
  state.pacientes.pacientesResult;
export const selectPacientesLoading = (state: RootState) => state.pacientes.loading;
export const selectPacientesError = (state: RootState) => state.pacientes.error;

export default pacientesSlice.reducer;
