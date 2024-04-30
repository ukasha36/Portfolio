import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainLayout from './Layout/MainLayout.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Skills from './Components/Skills/Skills.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <MainLayout/></>,
    children:[
      {
      path: "/",
      element: <App/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/skills",
      element: <Skills/>
    },
    {
      path: "/experience",
      element: <Experience/>
    },
    {
      path: "/projects",
      element: <Projects/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }

    ]

  }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
