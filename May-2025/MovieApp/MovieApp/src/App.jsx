import SignUp from './component/auth/signUp/signUp'
import Login from './component/auth/login/login'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      <SignUp />
      
      </Routes>
    </>
  )
}

export default App
