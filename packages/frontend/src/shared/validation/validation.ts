export const EmailValidation = {
	required: 'Email is require field',
	pattern: {
		value: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*/,
		message: 'Email is incorect',
	},
};

export const PasswordValidation = {
	required: 'Password is require field',
	minLength: {
		value: 5,
		message: 'Password must be bigger than 5 symbols',
	},
	maxLength: {
		value: 25,
		message: 'Password must be less than 25 symbols',
	},
};

export const NameValidation = {
	required: 'Name is require field',
};

export const CreateTodoValidation = {
	required: 'Field is required',
};

export const UpdateTitleValidation = {
	required: 'Field is required',
};

export const UpdateDescriptionValidation = {
	required: 'Field is required',
};
