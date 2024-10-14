import { css } from '@emotion/css';
import { THEME } from '../../../shared/styles/constants';

export const TodoNavigationSection = css`
	display: flex;
	flex-direction: row;
	margin-left: auto;
	margin-right: auto;
	width: 80vw;
	margin-bottom: ${THEME.spacing.medium};
	form {
		display: flex;
		align-items: center;
	}
	@media (max-width: ${THEME.breakpoints.tablet}px) {
		flex-direction: column;
		div {
			margin-bottom: ${THEME.spacing.small};
			flex-wrap: wrap;
		}
	}
`;
