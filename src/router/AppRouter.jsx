import React from 'react';
import { useSelector } from 'react-redux';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    const { logged } = useSelector((state) => state.auth);
    const user = localStorage.getItem('user');
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/*" element={<Outlet />}>
                <Route
                    path="auth/*"
                    element={<PublicRoutes logged={logged} user={user} />}
                >
                    <Route path="login" element={<AuthPage route="login" />} />
                    <Route
                        path="register"
                        element={<AuthPage route="register" />}
                    />
                </Route>
                <Route
                    path="*"
                    element={<PrivateRoutes logged={logged} user={user} />}
                >
                    <Route
                        path="posts"
                        element={<DashboardPage route="posts" />}
                    />
                    <Route
                        path="comments"
                        element={<DashboardPage route="comments" />}
                    />
                    <Route
                        path="albums"
                        element={<DashboardPage route="albums" />}
                    />
                    <Route
                        path="photos"
                        element={<DashboardPage route="photos" />}
                    />
                    <Route
                        path="todos"
                        element={<DashboardPage route="todos" />}
                    />
                    <Route
                        path="users"
                        element={<DashboardPage route="users" />}
                    />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to={'/auth/login'} replace={true} />}
                />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
