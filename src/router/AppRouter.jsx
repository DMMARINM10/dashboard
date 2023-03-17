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

const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/*"
                element={
                    <>
                        root
                        <Outlet />
                    </>
                }
            >
                <Route path="posts" element={<div>posts</div>} />
                <Route path="comments" element={<div>comments</div>} />
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
