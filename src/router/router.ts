import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";
import NotFoundPage from "../components/pages/not-found-page/NotFoundPage";
import Private from "../components/private/Private";
import { lazy } from "react";
import Paciente from "../components/pages/paciente/Paciente";

const Login = lazy(() => import("../components/pages/login/Login"));

const Router: any = createBrowserRouter([
  {
    path: "/",
    Component: ()=> Navigate({ to: PrivateRoutes.PRIVATE }),
    caseSensitive: true,
  },
  {
    path: PrivateRoutes.PRIVATE,
    Component: Private,
    caseSensitive: true,
    children: [
      {
        path: PrivateRoutes.PACIENTE,
        Component: Paciente,
        caseSensitive: true,
      }
    ]
  },
  {
    path: PublicRoutes.LOGIN,
    Component: Login,
    caseSensitive: true,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default Router;