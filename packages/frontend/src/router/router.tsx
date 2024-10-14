import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

const Router: React.FunctionComponent = () => {
	return (
		// Implement Routes
		<RouterProvider router={router} />
	);
};

export default Router;
