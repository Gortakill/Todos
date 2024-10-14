import { Button } from '@blueprintjs/core';
import { css } from '@emotion/css';
import React, { useCallback } from 'react';
import { TodoNavigationSection } from './todoNavigation.styles';
import { THEME } from '~shared/styles/constants';
import TodoCreate from '../todoCreate/TodoCreate.component';
import { useForm } from 'react-hook-form';

interface IProps {
	isClick: boolean;
	setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
	setFilter: React.Dispatch<
		React.SetStateAction<{
			search: string;
			status: string;
			showAll: string;
			isPublic: string;
		}>
	>;
	filter: {
		search: string;
		status: string;
		showAll: string;
		isPublic: string;
	};
}

interface FormType {
	search: string;
}

const TodoNavigation: React.FunctionComponent<IProps> = ({
	isClick,
	setIsClick,
	setFilter,
	filter,
}: IProps) => {
	const { register, reset, handleSubmit } = useForm<FormType>();
	const onSubmit = (data: FormType) => {
		setFilter((prev) => {
			return { ...prev, showAll: '' };
		});
		setFilter((prev) => {
			return { ...prev, search: data.search };
		});
	};
	const handleAll = useCallback(() => {
		setFilter((prev) => {
			return { ...prev, search: '' };
		});
		setFilter((prev) => {
			return { ...prev, status: '' };
		});
		setFilter((prev) => {
			return { ...prev, showAll: 'show' };
		});
	}, []);
	const handleComplete = useCallback(() => {
		setFilter((prev) => {
			return { ...prev, status: 'complete' };
		});
		setFilter((prev) => {
			return { ...prev, showAll: '' };
		});
	}, []);
	const handlePublic = useCallback(() => {
		setFilter((prev) => {
			return { ...prev, isPublic: 'public' };
		});
		setFilter((prev) => {
			return { ...prev, showAll: '' };
		});
	}, []);
	const handlePrivate = useCallback(() => {
		setFilter((prev) => {
			return { ...prev, isPublic: '' };
		});
		setFilter((prev) => {
			return { ...prev, showAll: '' };
		});
	}, []);
	return (
		<section className={TodoNavigationSection}>
			<div
				className={css`
					margin-right: auto;
				`}
			>
				<Button
					text={'All'}
					type="button"
					onClick={handleAll}
					intent="primary"
				/>
				<Button
					text={'Private'}
					type="button"
					intent="primary"
					onClick={handlePrivate}
				/>
				<Button
					text={'Public'}
					type="button"
					intent="primary"
					onClick={handlePublic}
				/>
				<Button
					text={'Completed'}
					type="button"
					onClick={handleComplete}
					intent="primary"
				/>
				<Button
					text="Create task"
					onClick={() => setIsClick((prev) => !prev)}
					type="button"
					className={css`
						margin-left: ${THEME.spacing.medium};
					`}
					intent="primary"
				></Button>
				{isClick && (
					<TodoCreate setIsClick={setIsClick} isClick={isClick} />
				)}
			</div>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="search"
					className={css`
						border: solid 1px black;
						padding: ${THEME.spacing.small};
					`}
					{...register('search')}
				/>
				<Button
					type="submit"
					icon="search"
					className="search"
					minimal
				/>
			</form>
		</section>
	);
};

export default TodoNavigation;
