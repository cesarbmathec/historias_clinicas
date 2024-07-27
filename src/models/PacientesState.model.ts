export interface PacienteResult {
  id: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  genero: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  cedula_identidad: string;
}

export interface PacientesState {
  pacientesResult: PacienteResult[];
  pacienteResult: PacienteResult | null,
  error: string | null;
  loading: boolean;
  loadingPaciente: boolean;
}