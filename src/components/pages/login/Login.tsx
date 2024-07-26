import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import "./Login.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";
import { getToken } from "../../../services";
import { PrivateRoutes, User } from "../../../models";
import { useNavigate } from "react-router-dom";

/* ====================================================================================
  Función Principal
  ==================================================================================== */
const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = (data) => {
    if (data) {
      try {
        dispatch(getToken(data));

        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: false });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={6} className="login-paper">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <i className="fa-solid fa-user" style={{ marginRight: 1 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 1 }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
              autoFocus
              InputProps={{
                startAdornment: <i className="fa-solid fa-user" />,
              }}
              {...register("username", { required: "Username is required" })}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message + "" : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              InputProps={{
                startAdornment: <i className="fa-solid fa-lock" />,
              }}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message + "" : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
