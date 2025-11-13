import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import AllProperties from "../Pages/allProperties";
import Login from "../Pages/login";
import PropertyDetails from "../Pages/PropertyDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AddProperty from "../Pages/AddProperty";
import MyProperty from "../Pages/MyProperty";
import ErrorPage from "../Pages/ErrorPage";
import MyRatings from "../Pages/MyRatings";

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
        Component: AllProperties,
      },
      {
        path: "/propertyDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-tenth-assignment-server-alpha.vercel.app/properties/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addProperties",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProperties",
        element: (
          <PrivateRoute>
            <MyProperty></MyProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRatings",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
