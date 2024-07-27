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
  async ({ bearer, id }: { bearer: string; id: number }) => {
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

export const addPaciente: any = createAsyncThunk(
  "user/addPaciente",
  async ({
    bearer,
    paciente,
  }: {
    bearer: string;
    paciente: PacienteResult;
  }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    };
    const response = await axios.post<PacienteResult>(
      "http://localhost:8000/" + pacientesURL,
      paciente,
      config
    );
    return response.data;
  }
);

export const updatePaciente: any = createAsyncThunk(
  "user/updatePaciente",
  async ({ bearer, id, paciente }: { bearer: string; id: number; paciente: PacienteResult }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    };
    const response = await axios.put<PacienteResult>(
      "http://localhost:8000/" + pacientesURL + id,
      paciente,
      config
    );
    return response.data;
  }
);

export const deletePaciente: any = createAsyncThunk(
  "user/deletePaciente",
  async ({ bearer, id }: { bearer: string; id: number }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    };
    await axios.delete("http://localhost:8000/" + pacientesURL + id, config);
    return id;
  }
);