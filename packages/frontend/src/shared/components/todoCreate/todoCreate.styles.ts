import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const OverlayStyles = css`
	display: flex;
	margin-top: ${THEME.spacing.medium};
	justify-content: center;
`;

export const FormStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid #215db0;
	padding: ${THEME.spacing.large};
	border-radius: 10px;
	background-color: ${THEME.colors.background};
	.input {
		margin-top: ${THEME.spacing.small};
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	button {
		margin-left: auto;
	}
`;

export const InputStyles = css`
	padding: 0.5rem 1rem 0.5rem 1rem;
	border: solid 1px black;
	margin-bottom: ${THEME.spacing.small};
	&:focus {
		border: solid 1px #215db0;
	}
`;
