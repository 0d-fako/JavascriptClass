import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/auth/signUp/signUp";
import Login from "./component/auth/login/login";
import "./App.css";
import router from "./router/routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<SignUp />} />
    //   </Routes>
    // </BrowserRouter>

    <RouterProvider router={router} />
    
  );
}

export default App;
