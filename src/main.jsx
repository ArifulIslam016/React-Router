import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import News from './Components/News/News.jsx';
import Laptop from './Components/Laptops/Laptop.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "News",
        Component: News,
      },
      {
        path: "Mobiles",
        Component: Mobiles,
      },
      { path:'Laptop', Component: Laptop },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
