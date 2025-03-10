
import { Routes, Route } from 'react-router-dom'

//paginas
import Header from './components/header';
import Footer from './components/footer';
import FileGallery from './components/fileGallery';
import { LoginForm } from './pages/login';
import { RegisterForm } from './pages/register';
import FilePreview from './pages/filePreview';

export default function App() {
  return(
    <>
      <Header />
        <Routes>
          <Route path='/' element={<FileGallery />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/Registrar' element={<RegisterForm />} />
          <Route path='/filePreview' element={<FilePreview />} />
        </Routes>
      <Footer />
    </>
  )
};