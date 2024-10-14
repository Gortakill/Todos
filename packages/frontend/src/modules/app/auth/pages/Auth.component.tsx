import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthMainStyles } from './auth.styles';
import { Button } from '@blueprintjs/core';
import { THEME } from '~shared/styles/constants';
import { ROUTER_KEYS } from '~shared/keys';

const AuthComponent: React.FunctionComponent = () => {
	return (
		<main className={AuthMainStyles}>
			<h1>TodoList</h1>
			<div>
				<Link
					to={ROUTER_KEYS.LOGIN_PAGE}
					className={css`
						margin-bottom: ${THEME.spacing.medium};
					`}
				>
					<Button intent="primary" large>
						Login
					</Button>
				</Link>

				<Link to={ROUTER_KEYS.REGISTER_PAGE}>
					<Button intent="primary" large>
						Register
					</Button>
				</Link>
				<Link
					to={ROUTER_KEYS.FORGOT_PASS}
					className={css`
						margin-top: 1rem;
					`}
				>
					forgot password?
				</Link>
			</div>
		</main>
	);
};

export default AuthComponent;
