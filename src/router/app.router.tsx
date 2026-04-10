import { createBrowserRouter, Navigate, Outlet, ScrollRestoration } from 'react-router'
import { PrivateRoute } from './private.routes';
import { GuestRoute } from './guest.routes';

import { Reservas } from '../pages/Reservas';
import { UserProfile } from '../pages/UserProfile';
import { ContactUs } from '../pages/ContactUs';
import { TermsandConds } from '../pages/TermsAndConds';
import SignIn from '../pages/Register';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { CompanyInfo } from '../pages/CompanyInfo';
import FAQ from '../pages/FAQ';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';

const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
};

export const Router = createBrowserRouter(
    [
        {
            element: <RootLayout />,
            children: [
                {
                    path: '/',
                    element: <LandingPage />
                },
                {
                    path: "/registro",
                    element: <GuestRoute element={<SignIn />} />
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
                    path: "/terminos",
                    element: <TermsandConds />
                },
                {
                    path: "/politica-privacidad",
                    element: <PrivacyPolicy />
                },
                {
                    path:"/info-empresas",
                    element: <CompanyInfo/>
                },
                {
                    path:"/faq",
                    element: <FAQ/>
                },
                {
                    path: "*",
                    element: <Navigate to="/" />
                }
            ]
        }
    ]
);

export default Router
