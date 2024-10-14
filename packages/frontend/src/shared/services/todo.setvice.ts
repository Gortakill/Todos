import { HttpSerivce } from './http';

export class TodoService extends HttpSerivce {
	constructor() {
		super();
	}

	getAllTodosFilltration(
		search: string,
		status: string,
		showAll: string,
		isPublic: string,
		skip: number,
	) {
		const params = new URLSearchParams();
		if (search) params.append('search', search);
		if (status) params.append('status', status);
		if (showAll) params.append('showAll', showAll);
		if (isPublic) params.append('isPublic', isPublic);

		const queryString = params.toString().replace('+', ' ');

		return this.get({
			url: `todo/all?skip=${skip}&${queryString ? `${queryString}` : ''}`,
		});
	}
	createTodo(data) {
		return this.post({
			url: 'todo/create',
			data,
		});
	}

	deleteTodo(id: number) {
		return this.delete(
			{
				url: `todo/delete`,
			},
			true,
			id,
		);
	}
	updateTodo(data, id: number) {
		const urlWithId = `todo/update/${id}`;
		return this.patch({
			url: urlWithId,
			data,
		});
	}
	updateStatusTodo(data, id: number) {
		const urlWithId = `todo/updateStatus/${id}`;
		return this.patch({
			url: urlWithId,
			data,
		});
	}
}
