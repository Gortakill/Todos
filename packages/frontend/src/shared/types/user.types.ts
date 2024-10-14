export interface IUser {
	email: string;
	name: string;
}

export interface IUserRegister {
	email: string;
	name: string;
	password: string;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserForgotPassword {
	email: string;
}

export interface IUserChangePassword {
	password: string;
}
