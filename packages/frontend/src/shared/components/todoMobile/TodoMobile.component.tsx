import React, { useEffect, useState } from 'react';
import { TodoMobileStyles } from './todoMobile.styles';
import Actions from '../actions/Actions.component';
import { useTodosStore } from '~store/todos.store';

interface Props {
	filter: {
		search: string;
		status: string;
		showAll: string;
		isPublic: string;
	};
	todos: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	}[];
}

const TodoMobile: React.FunctionComponent<Props> = ({ filter, todos }) => {
	const { fetchingTodosForMobile, setTodo } = useTodosStore((state) => {
		return {
			fetchingTodosForMobile: state.fetchTodosForMobile,
			setTodo: state.setTodo,
		};
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	const [hasMoreTodos, setHasMoreTodos] = useState(true);
	console.log(todos);
	useEffect(() => {
		const loadTodos = async () => {
			if (fetching && hasMoreTodos) {
				try {
					const newTodos = await fetchingTodosForMobile(
						filter.search,
						filter.status,
						filter.showAll,
						filter.isPublic,
						currentPage,
					);
					if (newTodos.todos.length < 5) {
						setHasMoreTodos(false);
					}
					setCurrentPage((prev) => prev + 1);
					setTodo(newTodos.todos);
				} catch (error) {
					console.error('Error fetching todos:', error);
				} finally {
					setFetching(false);
				}
			}
		};
		loadTodos();
	}, [fetching, hasMoreTodos, filter, currentPage]);
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);
	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			50
		) {
			setFetching(true);
		}
	};
	return (
		<ul className={TodoMobileStyles}>
			{todos.map((todo) => (
				<li key={todo.id}>
					<p>{todo.title}</p>
					<p>{todo.description}</p>
					<Actions todo={todo} />
				</li>
			))}
		</ul>
	);
};

export default TodoMobile;
