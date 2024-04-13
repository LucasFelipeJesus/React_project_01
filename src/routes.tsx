import {  createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'
import NotFound from './pages/404'

import FormFatecPage from './pages/Form'
import TarefasFatec from './pages/Tasks'

const router = createBrowserRouter([
  { path: '/', element: <Home />,errorElement: <NotFound/>},
  { path: '/sobre', element: <Sobre /> } ,
  { path: '/FormFatec', element: <FormFatecPage /> },
  { path: '/tarefas', element: <TarefasFatec /> }, 
])
export default router