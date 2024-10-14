import { create } from 'zustand';
import { TodoService } from '~shared/services/todo.setvice';
import { TodoType } from '~shared/types/todo.types';

const todoService = new TodoService();

interface ITodosStore {
	todos: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	}[];
	totalPages: number;
	setTodo: (newTodos) => void;
	fetchTodosFiltration: (
		search: string,
		status: string,
		showAll: string,
		isPublic: string,
		skip: number,
	) => Promise<TodoType>;
	fetchTodosForMobile: (
		search: string,
		status: string,
		showAll: string,
		isPublic: string,
		skip: number,
	) => Promise<TodoType>;
	createTodos: (data) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
	updateTodo: (data, id: number) => Promise<void>;
	updateStatusTodo: (data, id: number) => Promise<void>;
}

export const useTodosStore = create<ITodosStore>((set, get) => ({
	todos: [],
	totalPages: 0,
	setTodo: (newTodos) => {
		set({ todos: [...get().todos, ...newTodos] });
	},
	fetchTodosFiltration: async (
		search: string,
		status: string,
		showAll: string,
		isPublic: string,
		skip: number,
	) => {
		const limit = 5;
		const res = await todoService.getAllTodosFilltration(
			search,
			status,
			showAll,
			isPublic,
			skip,
		);
		set({ totalPages: Math.ceil(res.data.total / limit) });
		set({ todos: res.data.todos });
		return res.data;
	},
	fetchTodosForMobile: async (
		search: string,
		status: string,
		showAll: string,
		isPublic: string,
		skip: number,
	) => {
		const res = await todoService.getAllTodosFilltration(
			search,
			status,
			showAll,
			isPublic,
			skip,
		);
		if (get().todos.length === 0) {
			set({ todos: res.data.todos });
		}
		console.log(res.data);
		return res.data;
	},
	createTodos: async (data) => {
		const newTodo = await todoService.createTodo(data);
		set({ todos: [newTodo.data, ...get().todos] });
	},
	deleteTodo: async (id: number) => {
		await todoService.deleteTodo(id);
		set({ todos: get().todos.filter((todo) => todo.id !== id) });
	},
	updateTodo: async (data, id: number) => {
		await todoService.updateTodo(data, id);
	},
	updateStatusTodo: async (data, id: number) => {
		await todoService.updateStatusTodo(data, id);
	},
}));
