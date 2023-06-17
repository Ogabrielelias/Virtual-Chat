import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import App from './App';
import theme from "./Theme";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Conversas from './routes/Conversas';
import RegistrarUsuario from './routes/RegistrarUsuario';
import ErrorPage from './routes/errorPage';
import Home from './routes/home';


 const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     errorElement:<ErrorPage/>,
     children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/registrarUsuario",
        element: <RegistrarUsuario/>
      },
      {
        path: "/conversas",
        element: <Conversas/>
      },
     ]
   },
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
