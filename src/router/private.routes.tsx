import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../context/user.context';

interface Props
 {
    element: React.JSX.Element
 }

 export const PrivateRoute = ({ element }: Props) => 
    {
        const { isAuthenticated, isLoading } = useContext(UserContext);
        
        if (isLoading) {
            return null; // O un spinner de carga
        }

        if (isAuthenticated)
        {
            return element;
        }

        return <Navigate to="/" replace />;
    }

