import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import AllProperties from "../Pages/allProperties";
import Login from "../Pages/login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProperties",
        Component:AllProperties
      },
      {
        path: "/login",
        Component:Login
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
