import React from 'react';
// import PropTypes from 'prop-types'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/*" element={<Outlet />}>
                <Route path="posts" element={<DashboardPage route="posts" />} />
                <Route
                    path="comments"
                    element={<DashboardPage route="comments" />}
                />
                <Route path="albums" element={<div>albums</div>} />
                <Route path="photos" element={<div>photos</div>} />
                <Route path="todos" element={<div>todos</div>} />
                <Route path="users" element={<div>users</div>} />
                <Route
                    path="*"
                    element={<Navigate to={'/posts'} replace={true} />}
                />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

// AppRouter.propTypes = {};

export default AppRouter;
