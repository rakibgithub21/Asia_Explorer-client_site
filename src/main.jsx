import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './shared/Route.jsx'
import AuthContextComponent from './context/AuthContextComponent.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </AuthContextComponent>
  </React.StrictMode>,
)
