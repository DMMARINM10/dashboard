import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { loginUser } from '../store/slices/auth';
import { useDispatch } from 'react-redux';

const PrivateRoutes = ({ logged, user }) => {
    const dispatch = useDispatch();
    if (user || logged) {
        if (!logged) dispatch(loginUser(user));
        return <Outlet />;
    }
    return <Navigate to={'/auth/login'} replace={true} />;
};

PrivateRoutes.propTypes = {
    logged: PropTypes.bool.isRequired,
    user: PropTypes.string,
};

export default PrivateRoutes;
