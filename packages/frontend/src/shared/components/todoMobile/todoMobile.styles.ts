import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const TodoMobileStyles = css`
	list-style-type: none;
	height: 70vh;
	li {
		background-color: ${THEME.colors.background};
		margin-bottom: ${THEME.spacing.small};
		height: 25%;
		padding: ${THEME.spacing.small};
		border-radius: 5px;
		div {
			display: flex;
			width: 100%;
			justify-content: space-around;
		}
	}
`;
