import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Login from './routes/Login/index.jsx'
import Cadastro from './routes/Cadastro/index.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>,
    children: [
      {path: "/", element: <Login/>},
      {path: "/cadastre-se", element: <Cadastro/>},
      {path: "/home", element: <Home/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
)
