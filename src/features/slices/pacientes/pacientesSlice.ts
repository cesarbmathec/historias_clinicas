import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PacienteResult, PacientesState } from "../../../models";
import { RootState } from "../../../app";
import { addPaciente, deletePaciente, getPaciente, getPacientes, updatePaciente } from "../../../services";

export const initialStatePacientes: PacientesState = {
  pacientesResult: [],
  pacienteResult: null,
  error: "",
  loading: false,
  loadingPaciente: false,
};

export const pacientesSlice = createSlice({
  name: "pacientes",
  initialState: initialStatePacientes,
  reducers: {},
  extraReducers: (builder) => {
    // Get Pacientes
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
    // Get Paciente
    builder.addCase(getPaciente.pending, (state) => {
      state.loadingPaciente = true;
      state.error = "";
    });
    builder.addCase(
      getPaciente.fulfilled,
      (state, action: PayloadAction<PacienteResult>) => {
        state.pacienteResult = action.payload;
        state.loadingPaciente = false;
      }
    );
    builder.addCase(getPaciente.rejected, (state, action) => {
      state.loadingPaciente = false;
      state.error = action.error.code ?? "";
    });
    // Add Paciente
    builder.addCase(addPaciente.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      addPaciente.fulfilled,
      (state, action: PayloadAction<PacienteResult>) => {
        state.pacientesResult.push(action.payload);
        state.loading = false;
      }
    );
    builder.addCase(addPaciente.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.code ?? "";
    });
    // Update Paciente
    builder.addCase(updatePaciente.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      updatePaciente.fulfilled,
      (state, action: PayloadAction<PacienteResult>) => {
        const index = state.pacientesResult.findIndex(
          (paciente) => paciente.id === action.payload.id
        );
        if (index !== -1) {
          state.pacientesResult[index] = action.payload;
        }
        state.loading = false;
      }
    );
    builder.addCase(updatePaciente.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.code ?? "";
    });
    // Delete Paciente
    builder.addCase(deletePaciente.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      deletePaciente.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.pacientesResult = state.pacientesResult.filter(
          (paciente) => paciente.id !== parseInt(action.payload)
        );
        state.loading = false;
      }
    );
    builder.addCase(deletePaciente.rejected, (state, action) => {
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
