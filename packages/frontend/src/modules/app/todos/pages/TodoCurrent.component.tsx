import { Button, Card, Elevation, Switch } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TodoCurrentMainStyles } from './todo.styles';
import { ROUTER_KEYS } from '~shared/keys';
import Layout from '~shared/components/layout/Layout.component';
import { useTodosStore } from '~store/todos.store';

const TodoCurrent: React.FunctionComponent = () => {
	const location = useLocation();
	const todo = location.state;
	const [isComplete, setIsComplete] = useState(false);
	const [isPublic, setIsPublic] = useState(false);
	const updateStatus = useTodosStore((state) => state.updateStatusTodo);
	const firstUpdate = useRef(true);

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		updateStatus({ isComplete, isPublic }, todo.id);
	}, [isPublic, isComplete]);

	return (
		<Layout>
			<section className={TodoCurrentMainStyles}>
				<Card className="cardStyle" elevation={Elevation.TWO}>
					<h1>{todo.title}</h1>
					<h3>Description:</h3>
					<p>{todo.description}</p>
					<div>
						<p>Complete:</p>
						<Switch
							className="switch"
							onClick={() => setIsComplete((prev) => !prev)}
							defaultChecked={todo.isComplete}
						/>
					</div>
					<div>
						<p>Public:</p>
						<Switch
							className="switch"
							onClick={() => setIsPublic((prev) => !prev)}
							defaultChecked={todo.isPublic}
						/>
					</div>
					<div>
						<Link to={'/'}>
							<Button type="button" intent="primary">
								Back
							</Button>
						</Link>
						<Link
							to={ROUTER_KEYS.UPDATE_TODO.replace(
								':todo',
								String(todo.id),
							)}
							state={todo}
							className={css`
								margin-left: auto;
							`}
						>
							<Button type="button" intent="success">
								Update Todo
							</Button>
						</Link>
					</div>
				</Card>
			</section>
		</Layout>
	);
};

export default TodoCurrent;
