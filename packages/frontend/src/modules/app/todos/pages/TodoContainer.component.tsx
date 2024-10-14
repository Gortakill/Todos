import React, { useEffect, useState } from 'react';
import { useTodosStore } from '~store/todos.store';
import { THEME } from '~shared/styles/constants';
import TodoTablet from '~shared/components/todoTablet/TodoTablet.component';
import TodoDesktop from '~shared/components/todoDesktop/TodoDesktop.component';
import TodoMobile from '~shared/components/todoMobile/TodoMobile.component';
import TodoNavigation from '../../../../shared/components/todoNav/TodoNavigation.component';
import TodoPagination from '../../../../shared/components/todoPagination/TodoPagination.component';
import { TodoContainerMainStyles } from './todo.styles';

const TodoContainer: React.FunctionComponent = () => {
	const [isClick, setIsClick] = useState(false);
	const { fetchTodosFiltration, todos } = useTodosStore((store) => ({
		todos: store.todos,
		fetchTodosFiltration: store.fetchTodosFiltration,
	}));
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [filter, setFilter] = useState({
		search: '',
		status: '',
		showAll: 'show',
		isPublic: '',
	});
	const [page, setPage] = useState(1);
	useEffect(() => {
		fetchTodosFiltration(
			filter.search,
			filter.status,
			filter.showAll,
			filter.isPublic,
			page,
		);
	}, [filter, page]);

	useEffect(() => {
		const resize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<main className={TodoContainerMainStyles}>
			<TodoNavigation
				isClick={isClick}
				setIsClick={setIsClick}
				setFilter={setFilter}
				filter={filter}
			/>
			{windowWidth >= THEME.breakpoints.desktop && (
				<>
					<TodoDesktop todos={todos} />
					<TodoPagination setPage={setPage} page={page} />
				</>
			)}
			{windowWidth >= THEME.breakpoints.tablet &&
				windowWidth < THEME.breakpoints.desktop && (
					<TodoTablet todos={todos} filter={filter} />
				)}
			{windowWidth < THEME.breakpoints.tablet && (
				<TodoMobile filter={filter} todos={todos} />
			)}
		</main>
	);
};

export default TodoContainer;
