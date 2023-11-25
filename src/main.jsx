import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider, } from "react-router-dom";
import MainRoute from './Routers/MainRoute.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={MainRoute}>
          </RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
      <Toaster />
    </AuthProvider>

  </React.StrictMode>,
)
