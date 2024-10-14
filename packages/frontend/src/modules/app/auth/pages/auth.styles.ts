import { css } from '@emotion/css';
import { THEME } from '../../../../shared/styles/constants';

export const AuthMainStyles = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 70vh;
	justify-content: center;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5rem;
	}
`;

export const loginInput = css`
	padding: 0.5rem 1rem 0.5rem 1rem;
	border: solid 1px black;
`;

export const ValidationErrors = css`
	font-size: ${THEME.fonts.size.small};
	color: ${THEME.colors.error};
`;

export const LoginMain = css`
	display: flex;
	height: 70vh;
	justify-content: center;
	align-items: center;
`;

export const AuthStyles = css`
	display: flex;
	flex-direction: column;
	height: fit-content;
	justify-content: center;
	align-items: center;
	h1 {
		margin-bottom: ${THEME.spacing.medium};
	}
	form {
		display: flex;
		flex-direction: column;
		input:focus {
			border: 1px solid #215db0;
		}
	}
`;
