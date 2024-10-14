import axios, { Axios } from 'axios'; // It could be any fetching services, such as default fetch, call api, xhr, etc.
import { STORAGE_KEYS } from '~shared/keys';

export class HttpSerivce {
	baseUrl: string;
	fetchingService: Axios;
	apiVersion: string;
	constructor(
		baseUrl = process.env.SERVER_URL,
		fetchingService = axios,
		apiVersion = 'api',
	) {
		this.baseUrl = baseUrl;
		this.fetchingService = axios;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url) {
		return `${this.baseUrl}/${url}`;
	}

	private populateTokenToHeaderConfig() {
		const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
		return {
			// prettier-ignore
			'Authorization': token ? `Bearer ${token}` : '',
		};
	}

	private extractUrlAndDataFromConfig({
		data,
		url,
		...configWithoutDataAndUrl
	}) {
		return configWithoutDataAndUrl;
	}

	get(config, withAuth = true) {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get(this.getFullApiUrl(config.url), {
			headers: config.headers,
		});
	}

	put(config, withAuth = true) {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.put(
			this.getFullApiUrl(config.url),
			config.data,
			{ headers: config.headers },
		);
	}

	patch(config, withAuth = true) {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.patch(
			this.getFullApiUrl(config.url),
			config.data,
			{ headers: config.headers },
		);
	}

	post(config, withAuth = true) {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post(
			this.getFullApiUrl(config.url),
			config.data,
			{ headers: config.headers },
		);
	}
	delete(config, withAuth = true, id: number) {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		const urlWithId = `${config.url}/${id}`;
		return this.fetchingService.delete(this.getFullApiUrl(urlWithId), {
			...this.extractUrlAndDataFromConfig(config),
		});
	}
}
