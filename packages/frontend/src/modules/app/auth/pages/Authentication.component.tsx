import { Button, Card, Elevation } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '~shared/components/layout/Layout.component';
import { ROUTER_KEYS } from '~shared/keys';
import { THEME } from '~shared/styles/constants';

const Authentication: React.FunctionComponent = () => {
	return (
		<Layout>
			<main
				className={css`
					display: flex;
					height: 70vh;
					justify-content: center;
				`}
			>
				<Card
					elevation={Elevation.TWO}
					className={css`
						width: 50%;
						text-align: center;
						margin: auto;
					`}
				>
					<h3
						className={css`
							margin-bottom: ${THEME.spacing.medium};
						`}
					>
						Mail to authentication your profile was send on your
						email
					</h3>
					<Link to={ROUTER_KEYS.MAIN_PAGE}>
						<Button intent="primary">Go to main</Button>
					</Link>
				</Card>
			</main>
		</Layout>
	);
};

export default Authentication;
