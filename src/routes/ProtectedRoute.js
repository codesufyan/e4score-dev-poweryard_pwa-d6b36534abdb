import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const loginCheck = localStorage.getItem('loginCheck');
    return loginCheck === 'true' ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
