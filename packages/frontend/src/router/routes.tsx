import * as React from 'react';
import App from '~modules/app/app.module';
import Authentication from '~modules/app/auth/pages/Authentication.component';
import ForgotPass from '~modules/app/auth/pages/ForgotPass.component';
import LoginComponent from '~modules/app/auth/pages/Login.component';
import RegisterComponent from '~modules/app/auth/pages/Register.component';
import TodoCurrent from '~modules/app/todos/pages/TodoCurrent.component';
import TodoUpdate from '~modules/app/todos/pages/TodoUpdate.component';
import Profile from '~modules/app/user/pages/Profile.component';
import PrivateRoute from '~shared/components/privateRoute/PrivateRoute.component';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = [
	{
		path: ROUTER_KEYS.MAIN_PAGE,
		element: <App />,
	},
	{
		path: ROUTER_KEYS.LOGIN_PAGE,
		element: <LoginComponent />,
	},
	{
		path: ROUTER_KEYS.REGISTER_PAGE,
		element: <RegisterComponent />,
	},
	{
		path: ROUTER_KEYS.FORGOT_PASS,
		element: <ForgotPass />,
	},
	{
		path: ROUTER_KEYS.AUTHENTICATE_PAGE,
		element: <Authentication />,
	},
];

export const privateRoutes = [
	{
		path: ROUTER_KEYS.CURRENT_TODO_PAGE,
		element: (
			<PrivateRoute>
				<TodoCurrent />
			</PrivateRoute>
		),
	},
	{
		path: ROUTER_KEYS.UPDATE_TODO,
		element: (
			<PrivateRoute>
				<TodoUpdate />
			</PrivateRoute>
		),
	},
	{
		path: ROUTER_KEYS.PROFILE_PAGE,
		element: (
			<PrivateRoute>
				<Profile />
			</PrivateRoute>
		),
	},
];
