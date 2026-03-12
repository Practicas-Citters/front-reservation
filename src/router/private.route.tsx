import React, { useContext } from 'react'
import { UserContext } from '../context/user.context';
import { Navigate } from 'react-router';

interface Props
 {
    element: React.JSX.Element
 }

export const PrivateRoute = ({element}: Props) => 
    {
        const { isAuthenticated } = useContext(UserContext);
        
        if (isAuthenticated)
        {
            return element;
        }

        return <Navigate to="/" replace />;
    }
