import React from "react";
import { createBrowserRouter } from "react-router";
import SignUp from "../component/auth/signUp/signUp";
import Login from "../component/auth/login/login";
import Layout from "../component/layout/Layout";
import Movies from "../component/movies/Movies";

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  {
    path: "/home",
    element: <Layout />,
    children: [{ path: "/home/movies", element: <Movies /> }],
  },
]);

export default router;
