import { Button, Card, Elevation } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { THEME } from '~shared/styles/constants';
import { useAuthStore } from '~store/auth.store';
import ChangePassword from './ChangePassword.component';
import { CardStyles, ProfileStyles } from './profile.styles';
import Header from '~shared/components/header/Header.component';

const Profile: React.FunctionComponent = () => {
	const { user, logOut } = useAuthStore((state) => {
		return { user: state.user, logOut: state.logOut };
	});
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut();
		navigate(ROUTER_KEYS.MAIN_PAGE);
	};

	return (
		<>
			<Header />
			<main className={ProfileStyles}>
				{isOpen && (
					<ChangePassword setIsOpen={setIsOpen} isOpen={isOpen} />
				)}
				<Card className={CardStyles}>
					<div className="userInfo">
						<h3>Mail:</h3>
						<h4>{user.email}</h4>
					</div>
					<div className="userInfo">
						<h3>Name:</h3>
						<h4>{user.name}</h4>
					</div>
					<div
						className={css`
							display: flex;
							flex-direction: column;
							margin-top: ${THEME.spacing.small};
						`}
					>
						<div
							className={css`
								display: flex;
								justify-content: space-between;
								margin-bottom: ${THEME.spacing.small};
							`}
						>
							<Link to={ROUTER_KEYS.MAIN_PAGE}>
								<Button intent="primary">Back</Button>
							</Link>
							<Button intent="danger" onClick={handleLogOut}>
								Exit
							</Button>
						</div>
						<Button onClick={() => setIsOpen(true)}>
							Change Password
						</Button>
					</div>
				</Card>
			</main>
		</>
	);
};

export default Profile;
