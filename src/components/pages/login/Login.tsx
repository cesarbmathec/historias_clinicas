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
import { User } from "../../../models";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    if (data) {
      try {
        console.log(JSON.stringify(data));
        dispatch(getToken(data));
      } catch (e) {
        console.error(e);
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
              margin="normal"
              required
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
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
