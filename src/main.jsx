import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>,
    children: [
      {path: "/", element: <Login/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
