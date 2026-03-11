import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router'
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import { PrivateRoute } from './private.routes';
import { Reservas } from '../pages/Reservas';

export const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: "/registro",
            element: <PrivateRoute element={<Registro />} />
        },
        {
            path: "/login",
            element: <PrivateRoute element={<Login />} />
        },
        {
            path: "/reservar",
            element: <Reservas />
        },
        /*
        {
            path: "/perfil"
            element: <PrivateRoute element={<Perfil />} />
        },
        {
            path: "/reservas"
            element: <PrivateRoute element={<MisReservas />} />
        },
        {
            path: "/suscripcion"
            element: <Suscripcion />
        },
        */
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ]
);

export default Router
