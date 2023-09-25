import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import { Donation } from './pages/Donation'
import { Statistics } from './pages/Statistics'
import ViewDetails from './pages/ViewDetails'
import { MyDatas } from './database/Datas'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    // errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/donation',
        element:<Donation/>
      },
      {
        path:'/donation/:id',
        element:<ViewDetails/>
      },
      {
        path:'/statistics',
        element:<Statistics/>
      },{
        path:'/view/:id',
        element:<ViewDetails/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
