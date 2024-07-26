import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PacienteResult } from "../models";

const pacientesURL = "historias_medicas/paciente/";

export const getPacientes: any = createAsyncThunk(
  "user/getPacientes",
  async (bearer: string) => {
    // Header
    const config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    };
    // Petición
    const pacientes = await axios.get<PacienteResult[]>(
      "http://localhost:8000/" + pacientesURL,
      config
    );
    return pacientes.data;
  }
);

export const getPaciente: any = createAsyncThunk(
  "user/getPaciente",
  async (bearer: string, id) => {
    // Header
    const config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    };
    // Petición
    const paciente = await axios.get<PacienteResult>(
      "http://localhost:8000/" + pacientesURL + id,
      config
    );
    return paciente.data;
  }
);
