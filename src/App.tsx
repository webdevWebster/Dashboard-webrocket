
import { Routes, Route } from 'react-router-dom'

//paginas
import DashBoard from "./pages/dashBoard";
import { LoginForm } from './pages/login';
import { RegisterForm } from './pages/register';

export default function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Registrar" element={<RegisterForm />} />
      </Routes>
    </>
  )
};