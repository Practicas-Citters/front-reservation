import { createBrowserRouter, Navigate } from 'react-router'
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import { PrivateRoute } from './private.routes';
import { Reservas } from '../pages/Reservas';
import { GuestRoute } from './guest.routes';
import { UserProfile } from '../pages/UserProfile';
import Registro from '../pages/Register';
import { ContactUs } from '../pages/ContactUs';

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
        {
            path: "/contacto",
            element: <ContactUs />
        },
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ]
);

export default Router
