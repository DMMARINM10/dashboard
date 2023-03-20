import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/auth';

const PublicRoutes = ({ logged, user }) => {
    const dispatch = useDispatch();
    if (user || logged) {
        if (!logged) dispatch(loginUser(user));
        return <Navigate to={'/posts?page=1'} replace={true} />;
    }
    return <Outlet />;
};

PublicRoutes.propTypes = {
    logged: PropTypes.bool.isRequired,
    user: PropTypes.string,
};

export default PublicRoutes;
