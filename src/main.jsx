import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import DetailApps from './components/Pages/DetailApps.jsx';
import Installation from './components/Pages/Installation.jsx';
import FetchingData from './components/Pages/FetchingData.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path: "/",
        Component: Home
      }, 
      {
        path: "/apps",
        Component: FetchingData
      },
      {
        path: "/appDetails/:id",
        Component: DetailApps
      },
      {
        path: "/installation",
        Component: Installation
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
