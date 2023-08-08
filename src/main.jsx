import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./views/Home/HomeComponent";
import ProfileComponent from "./views/Profile/ProfileComponent";
import ErrorComponent from "./views/Error/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        errorElement: <ErrorComponent></ErrorComponent>,
        children: [
          {
            index: true,
            element: <MainComponent></MainComponent>,
          },
          {
            path: "profile",
            element: <ProfileComponent></ProfileComponent>,
          },
          {
            path: "*",
            element: <ErrorComponent></ErrorComponent>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
