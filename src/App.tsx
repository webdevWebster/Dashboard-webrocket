
import { Routes, Route } from 'react-router-dom'

//paginas
import DashBoard from "./pages/dashBoard";
import { LoginForm } from './pages/login';
import { RegisterForm } from './pages/register';
import Plans from './pages/planos';
import CreatorPage from './pages/creatorPage';
import FilePreview from './pages/filePreview';
import AdminContributor from './pages/adminContributor';

export default function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Registrar" element={<RegisterForm />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/creatorPage" element={<CreatorPage />} />
        <Route path="/adminContribuidor" element={<AdminContributor />} />
        <Route path="/filePreview" element={<FilePreview />} />
      </Routes>
    </>
  )
};