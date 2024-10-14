import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTodosStore } from '~store/todos.store';
import {
	AuthStyles,
	loginInput,
	LoginMain,
} from '~modules/app/auth/pages/auth.styles';
import Input from '~shared/components/Input/Input.component';
import AuthNav from '~shared/components/authNav/AuthNav.component';
import Layout from '~shared/components/layout/Layout.component';
import { Card, Elevation } from '@blueprintjs/core';
import {
	UpdateDescriptionValidation,
	UpdateTitleValidation,
} from '~shared/validation/validation';

interface IUpdateTodo {
	title: string;
	description: string;
	isPublic: boolean;
	isComplete: boolean;
}

const TodoUpdate: React.FunctionComponent = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IUpdateTodo>();
	const updateTodo = useTodosStore((state) => state.updateTodo);

	const location = useLocation();
	const todo = location.state;

	const onSubmit = (data: IUpdateTodo) => {
		updateTodo(data, todo.id);
		reset();
	};

	return (
		<Layout>
			<main className={LoginMain}>
				<Card className={AuthStyles} elevation={Elevation.TWO}>
					<h1>Update todo</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							className={loginInput}
							register={register}
							fieldName="title"
							fieldType="text"
							label="Title"
							validationRules={UpdateTitleValidation}
							errors={errors.title}
							value={todo.title}
						/>
						<Input
							className={loginInput}
							register={register}
							fieldName="description"
							fieldType="text"
							label="Description"
							validationRules={UpdateDescriptionValidation}
							errors={errors.description}
							value={todo.description}
						/>
						<AuthNav text="submit" />
					</form>
				</Card>
			</main>
		</Layout>
	);
};

export default TodoUpdate;
