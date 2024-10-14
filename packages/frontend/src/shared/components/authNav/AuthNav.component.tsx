import { Button } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

interface Props {
	text: string;
}

const AuthNav: React.FunctionComponent<Props> = ({ text }) => {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
			`}
		>
			<Link to={ROUTER_KEYS.MAIN_PAGE}>
				<Button type="button" intent="primary">
					Back
				</Button>
			</Link>
			<Button type="submit" text={text} intent="primary" />
		</div>
	);
};

export default AuthNav;
