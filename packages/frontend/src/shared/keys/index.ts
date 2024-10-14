export const enum ROUTER_KEYS {
	MAIN_PAGE = '/',
	LOGIN_PAGE = '/login',
	REGISTER_PAGE = '/register',
	CURRENT_TODO_PAGE = '/todo/:todoId',
	UPDATE_TODO = '/updateTodo/:todoId',
	FORGOT_PASS = '/forgotPassword',
	PROFILE_PAGE = '/profile/:username',
	AUTHENTICATE_PAGE = '/authenticate',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
	AUTH_STORAGE: 'auth-storage',
});
