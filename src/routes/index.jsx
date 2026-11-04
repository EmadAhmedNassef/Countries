import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("../App"));
const NotFound = lazy(() => import("../pages/NotFound"));
const CountryDetails = lazy(() => import("../pages/CountryDetails"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
