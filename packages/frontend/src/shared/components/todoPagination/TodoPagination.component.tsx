import { Button } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React from 'react';
import { useTodosStore } from '~store/todos.store';

interface Props {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const TodoPagination: React.FunctionComponent<Props> = ({ page, setPage }) => {
	const totalPages = useTodosStore((state) => state.totalPages);

	const handlePage = (newPage: number) => {
		setPage(newPage);
	};
	return (
		<section
			className={css`
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin-left: auto;
				margin-right: auto;
				width: 80vw;
				margin-top: 1rem;
			`}
		>
			<div
				className={css`
					margin-right: auto;
				`}
			>
				{Array.from({ length: totalPages }, (_, i) => (
					<Button
						key={i + 1}
						text={i + 1}
						type="button"
						onClick={() => handlePage(i + 1)}
						disabled={page === i + 1}
					/>
				))}
			</div>
		</section>
	);
};

export default TodoPagination;
