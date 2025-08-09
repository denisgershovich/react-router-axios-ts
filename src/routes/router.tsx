import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../components/Home';
import { appLoader } from './appLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        loader: appLoader
    },
]);

const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default Router;