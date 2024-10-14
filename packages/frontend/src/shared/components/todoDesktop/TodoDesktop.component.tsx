import React from 'react';
import { TodoDesktopStyles } from './todoDesktop.styles';
import Actions from '../actions/Actions.component';

export interface ITodosProps {
	todos: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	}[];
}

const TodoDesktop: React.FunctionComponent<ITodosProps> = ({
	todos,
}: ITodosProps) => {
	return (
		<table className={TodoDesktopStyles}>
			<thead>
				<tr>
					<th>Todo title</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{todos.map((todo) => (
					<tr key={todo.id}>
						<td>{todo.title}</td>
						<td>{todo.description}</td>
						<td>
							<Actions todo={todo} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TodoDesktop;
