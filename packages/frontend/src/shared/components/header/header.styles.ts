import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const HeaderStyles = css`
	display: flex;
	padding: ${THEME.spacing.small};
	align-items: center;
	div {
		margin-left: auto;
		margin-right: ${THEME.spacing.small};
	}
`;
