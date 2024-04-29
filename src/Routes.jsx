import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Forms/Login/Login";
import Signup from "./components/Forms/Signup/Signup";
import { Dashboard } from "./components/Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
