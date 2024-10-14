import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '~shared/keys';
import { AuthService } from '~shared/services/auth.service';
import {
	IUserChangePassword,
	IUserForgotPassword,
	IUserLogin,
	IUserRegister,
} from '~shared/types/user.types';

interface IAuthStore {
	isAuth: boolean;
	user: {
		email: string;
		name: string;
	};
	registerUser: (data: IUserRegister) => Promise<void>;
	loginUser: (data: IUserLogin) => Promise<void>;
	forgotPassword: (data: IUserForgotPassword) => Promise<void>;
	getUser: () => Promise<void>;
	changePassword: (data: IUserChangePassword) => Promise<void>;
	logOut: () => void;
}

const authService = new AuthService();

export const useAuthStore = create(
	persist<IAuthStore>(
		(set) => ({
			isAuth: false,
			user: {
				email: '',
				name: '',
			},
			registerUser: async (data) => {
				const userInfo = await authService.register({
					email: data.email,
					name: data.name,
					password: data.password,
				});
				set({ isAuth: true });
				localStorage.setItem(STORAGE_KEYS.TOKEN, userInfo.data.token);
				set({
					user: {
						email: data.email,
						name: data.name,
					},
				});
			},
			loginUser: async (payload) => {
				const userInfo = await authService.login(payload);
				localStorage.setItem(STORAGE_KEYS.TOKEN, userInfo.data.token);
				const { data } = await authService.getUser();
				set({ isAuth: true });
				set({
					user: {
						email: data.email,
						name: data.name,
					},
				});
			},
			forgotPassword: async (data) => {
				await authService.forgotPassword(data);
			},
			getUser: async () => {
				const { data } = await authService.getUser();
				set({ isAuth: true }),
					set({
						user: {
							email: data.email,
							name: data.name,
						},
					});
			},
			changePassword: async (data) => {
				await authService.changePassword(data);
			},
			logOut: () => {
				localStorage.removeItem(STORAGE_KEYS.TOKEN);
				localStorage.removeItem(STORAGE_KEYS.AUTH_STORAGE);
				set({
					user: {
						email: '',
						name: '',
					},
				});
				set({ isAuth: false });
			},
		}),
		{
			name: 'auth-storage',
			getStorage: () => localStorage,
		},
	),
);
