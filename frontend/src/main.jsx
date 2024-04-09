import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MainProvider from '../context/mainProvider.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

import RootLayout from './layouts/root-layout.jsx'
import DashboardLayout from './layouts/auth-layout.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

import IndexPage from './routes/index.jsx'
import SignInPage from './routes/sign-in.jsx'
import SignUpPage from './routes/sign-up.jsx'
import Home from '../components/home.jsx'
import FurnitureGallery from '../components/furnitureGallery.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "/",
        children: [
          { path: "/furniture", element: <Home /> },
          { path: '/furniture/:id', element: <FurnitureGallery /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

      <MainProvider>
      <RouterProvider router={router} />
      </MainProvider>
  // </React.StrictMode>
)
