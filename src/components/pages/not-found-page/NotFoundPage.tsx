import { Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss"; // Importa tu archivo Sass

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <i
        className="fa-solid fa-exclamation-triangle"
        style={{ fontSize: "30px" }}
        color="#ff9800"
      />
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
