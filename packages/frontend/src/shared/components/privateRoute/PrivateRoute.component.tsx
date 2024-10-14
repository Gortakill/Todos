import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_KEYS, STORAGE_KEYS } from '~shared/keys';

const PrivateRoute: React.FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	const auth = localStorage.getItem(STORAGE_KEYS.AUTH_STORAGE);
	const parseAuth = JSON.parse(auth);

	if (!parseAuth.state.isAuth) {
		return <Navigate to={ROUTER_KEYS.LOGIN_PAGE} replace />;
	}
	return <>{children}</>;
};

export default PrivateRoute;
