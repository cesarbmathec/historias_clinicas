import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import "./MainLayout.scss";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../utilities";
import { PrivateRoutes, PublicRoutes } from "../../models";

type Props = {};
const drawerWidth = 240;

/* ===================================================================================
    Main Function
   =================================================================================== */
const MainLayout = (_props: Props) => {
  // Hooks
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Métodos
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Tiempo de inactividad
  const startTimer = () => {
    let timeout: ReturnType<typeof setTimeout>;

    const restarTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Borrar el token de autenticación después de x minutos de inactividad
        clearLocalStorage("token");
        // Mostrar un mensaje de sesión expirada y cerrar la sesión
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
      }, 10 * 60 * 1000); // 10 minutos en milisegundos
    };

    // Reiniciar el temporizador en cada interacción del usuario
    window.addEventListener("mousemove", restarTimer);
    window.addEventListener("keydown", restarTimer);

    // Iniciar el temporizador al cargar la página
    restarTimer();
  };

  useEffect(() => {
    startTimer();
  }, []);

  const items = [
    {
      key: 1,
      title: "Pacientes",
      link: PrivateRoutes.PACIENTE,
      icon: "fa-solid fa-users",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>
                <i className={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <i className="fa-solid fa-bars" />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          PaperProps={{
            sx: {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Contenido Principal */}
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default MainLayout;
