import { createBrowserRouter } from "react-router";
import SignUp from "../component/auth/signUp/signUp";
import Login from "../component/auth/login/login";

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
]);

export default router;
