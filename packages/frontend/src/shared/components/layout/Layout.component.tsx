import { PropsWithChildren } from 'react';
import Header from '../header/Header.component';
import React from 'react';

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
