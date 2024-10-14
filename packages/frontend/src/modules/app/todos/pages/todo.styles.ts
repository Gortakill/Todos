import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const TodoCurrentMainStyles = css`
	display: flex;
	width: 100vw;
	height: 70vh;
	align-items: center;
	justify-content: center;
	.cardStyle {
		display: flex;
		flex-direction: column;
		height: 50%;
		width: 50%;
		align-items: start;
		justify-content: center;
		div {
			display: flex;
			width: 100%;
		}
		div:last-of-type {
			margin-top: ${THEME.spacing.small};
		}
		.switch {
			margin-left: auto;
		}
	}
`;

export const TodoContainerMainStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 90vh;
	@media (max-width: ${THEME.breakpoints.desktop}px) {
		align-items: unset;
	}
	@media (max-width: ${THEME.breakpoints.mobile}px) {
		justify-content: unset;
	}
`;

export const TodoUpdateMainStyles = css`
	display: flex;
	height: 80vh;
	justify-content: center;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;
		input {
			padding: 0.5rem 1rem 0.5rem 1rem;
			border: solid 1px black;
			margin-bottom: ${THEME.spacing.small};
		}
		label {
			margin-top: ${THEME.spacing.small};
		}
	}
`;
