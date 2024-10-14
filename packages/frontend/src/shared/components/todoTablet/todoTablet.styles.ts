import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const TodoTabletStyles = css`
	display: flex;
	overflow-x: auto;
	::-webkit-scrollbar {
		width: 0px;
		background: rgba(255, 255, 255, 0);
	}
	.todo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-width: 30vw;
		background-color: ${THEME.colors.background};
		border-radius: 10px;
		margin-right: ${THEME.spacing.medium};
		p:first-of-type {
			margin-top: ${THEME.spacing.small};
		}
		p {
			margin-left: ${THEME.spacing.small};
			margin-right: ${THEME.spacing.small};
		}
		div {
			display: flex;
			width: 100%;
			padding-left: ${THEME.spacing.small};
			padding-right: ${THEME.spacing.small};
			justify-content: space-between;
			margin-bottom: ${THEME.spacing.small};
		}
	}
`;
