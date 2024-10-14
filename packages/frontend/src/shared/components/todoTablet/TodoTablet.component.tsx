import React, { useEffect, useRef, useState } from 'react';
import { TodoTabletStyles } from './todoTablet.styles';
import Actions from '../actions/Actions.component';
import { useTodosStore } from '~store/todos.store';

export interface ITodosProps {
	todos: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	}[];
	filter: {
		search: string;
		status: string;
		showAll: string;
		isPublic: string;
	};
}

const TodoTablet: React.FunctionComponent<ITodosProps> = ({
	todos,
	filter,
}: ITodosProps) => {
	const { fetchingTodosforMobile, setTodo } = useTodosStore((state) => {
		return {
			fetchingTodosforMobile: state.fetchTodosForMobile,
			setTodo: state.setTodo,
		};
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	const [hasMoreTodos, setHasMoreTodos] = useState(true);
	const containerRef = useRef<HTMLDivElement>();
	useEffect(() => {
		const loadTodos = async () => {
			if (fetching && hasMoreTodos) {
				try {
					const newTodos = await fetchingTodosforMobile(
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
		const container = containerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);
	const handleScroll = () => {
		if (containerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				containerRef.current;
			if (scrollLeft + clientWidth >= scrollWidth - 50) {
				setFetching(true);
			}
		}
	};
	return (
		<div className={TodoTabletStyles} ref={containerRef}>
			{todos.map((todo) => (
				<div key={todo.id} className="todo">
					<p>{todo.title}</p>
					<p>{todo.description}</p>
					<Actions todo={todo} />
				</div>
			))}
		</div>
	);
};

export default TodoTablet;
