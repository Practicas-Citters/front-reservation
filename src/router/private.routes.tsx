import React from 'react'
import { Navigate } from 'react-router';

interface Props
 {
    element: React.JSX.Element
 }

 export const PrivateRoute = ({ element }: Props) => 
    {
        const isAuthenticated = false; // El valor se debe sacar del contexto
        
        if (!isAuthenticated)
        {
            return element;
        }

        return <Navigate to="/" replace />;
    }

