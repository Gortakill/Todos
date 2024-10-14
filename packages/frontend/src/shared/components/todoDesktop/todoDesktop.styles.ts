import { css } from '@emotion/css';
import { THEME } from '~shared/styles/constants';

export const TodoDesktopStyles = css`
	width: 80vw;
	border: 1px solid black;
	border-collapse: collapse;
	thead {
		tr {
			th {
				border: 1px solid black;
			}
		}
	}
	tbody {
		tr {
			td {
				border: 1px solid black;
				height: 10vh;
				div {
					display: flex;
					justify-content: space-around;
				}
				&:first-child {
					width: 10vw;
				}
				&:last-child {
					width: 10vw;
				}
			}
		}
		tr:nth-child(2n) {
			background-color: ${THEME.colors.background};
		}
	}
`;
