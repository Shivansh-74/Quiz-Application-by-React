import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
      path:"",
      element:<Home/>
      },
      {
      path:"lists",
      element:<App/>
      },
  
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <RouterProvider router={router}/>
  </StrictMode>,
)
