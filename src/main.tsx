import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'




ReactDOM.createRoot(document.getElementById('root')!).render(//criando arquivo raiz
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}/>   
    </ChakraProvider>
  </React.StrictMode>,
)
