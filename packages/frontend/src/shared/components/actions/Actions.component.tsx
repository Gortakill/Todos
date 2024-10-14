import { Button, Switch } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useTodosStore } from '~store/todos.store';

interface ITodoProps {
	todo: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	};
}

const Actions: React.FunctionComponent<ITodoProps> = ({ todo }: ITodoProps) => {
	const deleteTodo = useTodosStore((state) => state.deleteTodo);
	return (
		<div>
			<Link
				to={ROUTER_KEYS.CURRENT_TODO_PAGE.replace(
					':todoId',
					String(todo.id),
				)}
				state={todo}
			>
				<Button type="button" intent="primary">
					View
				</Button>
			</Link>
			<Button
				text="Delete"
				type="button"
				intent="danger"
				onClick={() => deleteTodo(todo.id)}
			/>
		</div>
	);
};

export default Actions;
