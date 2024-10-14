import { HttpSerivce } from './http';

export class AuthService extends HttpSerivce {
	constructor() {
		super();
	}
	register(data) {
		return this.post({
			url: 'user/register',
			data,
		});
	}
	login(data) {
		return this.post({
			url: 'user/login',
			data,
		});
	}
	forgotPassword(data) {
		return this.post({
			url: 'user/forgot',
			data,
		});
	}
	getUser() {
		return this.get({
			url: 'user/getUser',
		});
	}
	changePassword(data) {
		return this.patch({
			url: 'user/changePassword',
			data,
		});
	}
}
