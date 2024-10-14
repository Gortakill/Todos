export type TodoType = {
	todos: {
		id: number;
		userId: number;
		title: string;
		description: string;
		isCompleted: boolean;
		isPublic: boolean;
	}[];
	title: number;
};
