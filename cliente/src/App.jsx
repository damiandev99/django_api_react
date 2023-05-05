import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Browesr router es el componente que va a englobar todo. Routes y route este recibe las propiedades del nombre de la ruta y el elemento es de donde va a mostrar el contenido, es decir el componente o la pagina que le importemos

//! Componentes dentro de React
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <BrowserRouter>

      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/tasks" />} />
          <Route path='/tasks/' element={< TaskPage />}></Route>
          <Route path='/tasks-create/' element={< TaskFormPage />}></Route>
          {/* Ruta que trae el id de la tarea es decir trae la tarea para cargar en la view */}
          <Route path='/tasks/:id' element={< TaskFormPage />}></Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App