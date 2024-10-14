import { Button, Overlay2, OverlaysProvider } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React from 'react';
import { FormStyles, InputStyles, OverlayStyles } from './todoCreate.styles';
import { useForm } from 'react-hook-form';
import { useTodosStore } from '~store/todos.store';
import Input from '../Input/Input.component';
import { CreateTodoValidation } from '~shared/validation/validation';

interface IProps {
	setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
	isClick: boolean;
}

interface FormType {
	title: string;
	description: string;
}

const TodoCreate: React.FunctionComponent<IProps> = ({
	isClick,
	setIsClick,
}: IProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormType>();

	const createTodo = useTodosStore((state) => state.createTodos);

	const onSubmit = (data: FormType) => {
		createTodo(data);
		reset();
	};

	return (
		<OverlaysProvider>
			<Overlay2
				isOpen={isClick}
				onClose={() => setIsClick((prev) => !prev)}
				className={OverlayStyles}
			>
				<form onSubmit={handleSubmit(onSubmit)} className={FormStyles}>
					<h1>Create Todo</h1>
					<div className="input">
						<Input
							className={InputStyles}
							fieldType="text"
							fieldName="title"
							register={register}
							label="Enter title"
							validationRules={CreateTodoValidation}
							errors={errors.title}
							placeHolder="title..."
						/>
						<Input
							className={InputStyles}
							fieldType="text"
							fieldName="description"
							register={register}
							label="Enter description"
							validationRules={CreateTodoValidation}
							errors={errors.description}
							placeHolder="description..."
						/>
						<Button type="submit" text="submit" intent="primary" />
					</div>
					<div></div>
				</form>
			</Overlay2>
		</OverlaysProvider>
	);
};

export default TodoCreate;
