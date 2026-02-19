import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router'
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';

export const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: "/registro",
            element: <Registro />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ]
);

export default Router
