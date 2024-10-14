import { Alignment, Button, Navbar } from '@blueprintjs/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '~store/auth.store';
import { HeaderStyles } from './header.styles';
import { ROUTER_KEYS } from '~shared/keys';

const Header: React.FunctionComponent = () => {
	const user = useAuthStore((state) => state.user);

	return (
		<header className={HeaderStyles}>
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Todos</Navbar.Heading>
					<Navbar.Divider />
					<Link to={ROUTER_KEYS.MAIN_PAGE}>
						<Button
							className="bp5-minimal"
							icon="home"
							text="Home"
						/>
					</Link>
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<div>{user.name}</div>
					<Link to={ROUTER_KEYS.PROFILE_PAGE}>
						<Button className="bp5-minimal" icon="user" text="" />
					</Link>
				</Navbar.Group>
			</Navbar>
		</header>
	);
};

export default Header;
