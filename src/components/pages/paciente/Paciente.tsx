import { Box, Button, Stack, Typography } from "@mui/material";
import PacienteList from "./PacienteList";

type Props = {};

function Paciente(_props: Props) {
  return (
    <>
      <Box sx={{ width: "100%", my: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2 }}
        >
          <Typography variant="h5" component="div" sx={{ mb: 4 }}>
            Pacientes
          </Typography>
          <Button
            variant="contained"
            startIcon={<i className="fa-solid fa-user-plus" />}
          >
            Agregar Paciente
          </Button>
        </Stack>
      </Box>
      <PacienteList />
    </>
  );
}

export default Paciente;
