import * as React from 'react';
import TodoContainer from '~modules/app/todos/pages/TodoContainer.component';
import AuthComponent from './auth/pages/Auth.component';
import { useAuthStore } from '~store/auth.store';
import Header from '~shared/components/header/Header.component';
import { useEffect } from 'react';
import Layout from '~shared/components/layout/Layout.component';

const App = (): React.ReactNode => {
	const getUser = useAuthStore((state) => state.getUser);

	useEffect(() => {
		getUser();
	}, []);

	const isAuth = useAuthStore((state) => state.isAuth);
	if (!isAuth) {
		return (
			<Layout>
				<AuthComponent />
			</Layout>
		);
	}
	return (
		<Layout>
			<main>
				<TodoContainer />
			</main>
		</Layout>
	);
};

export default App;
