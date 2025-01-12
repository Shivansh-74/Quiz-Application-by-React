import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import { Provider } from 'react-redux'
import {store} from '../src/redux/store.js'
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
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
