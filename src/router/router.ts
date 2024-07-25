import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { PrivateRoutes } from "../models";
import Home from "../components/pages/home/Home";
import NotFoundPage from "../components/pages/not-found-page/NotFoundPage";

const Router: any = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    caseSensitive: true,
    children: [
    {
        path: "/",
        Component: Home,
        caseSensitive: true,
    },
    {
        path: PrivateRoutes.HOME,
        Component: Home,
        caseSensitive: true,
    },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default Router;