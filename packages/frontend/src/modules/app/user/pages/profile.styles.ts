import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const ProfileStyles = css`
	display: flex;
	height: 70vh;
	align-items: center;
	justify-content: center;
`;

export const CardStyles = css`
	padding: ${THEME.spacing.large};
	.userInfo {
		display: flex;
		h4 {
			margin-left: ${THEME.spacing.small};
		}
	}
`;
