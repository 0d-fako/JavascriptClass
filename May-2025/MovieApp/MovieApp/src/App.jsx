import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/auth/signUp/signUp";
import Login from "./component/auth/login/login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
