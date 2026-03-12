import { createBrowserRouter, Navigate } from 'react-router'
import Registro from '../pages/Register';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import { Reservas } from '../pages/Reservas';
import { UserProfile } from '../pages/UserProfile';
import { GuestRoute } from './guest.routes';
import { PrivateRoute } from './private.route';

export const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: "/registro",
            element: <GuestRoute element={<Registro />} />
        },
        {
            path: "/login",
            element: <GuestRoute element={<Login />} />
        },
        {
            path: "/reservar",
            element: <Reservas />
        },
        {
            path: "/perfil",
            element: <PrivateRoute element={<UserProfile />} />
        },
        /*
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
