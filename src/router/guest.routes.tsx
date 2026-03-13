import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../context/user.context';

interface Props
 {
    element: React.JSX.Element
 }

 export const GuestRoute = ({ element }: Props) => 
    {
        const { isAuthenticated, isLoading } = useContext(UserContext);
        
        if (isLoading) {
            return null;
        }

        if (!isAuthenticated)
        {
            return element;
        }

        return <Navigate to="/" replace />;
    }

