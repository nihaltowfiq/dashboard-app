export class BaseAPI {
	protected baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	protected async get<T>(url: string): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json; charset=UTF-8',
				Accept: 'application/json',
			},
		});
		return await res.json();
	}

	protected async post<T>(url: string, payload: unknown): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json; charset=UTF-8',
				Accept: 'application/json',
			},
			body: JSON.stringify(payload),
		});

		return await res.json();
	}

	protected async put<T>(url: string, payload: unknown): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json; charset=UTF-8',
				Accept: 'application/json',
			},
			body: JSON.stringify(payload),
		});

		return await res.json();
	}

	protected async delete<T>(url: string, payload: unknown = {}): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json; charset=UTF-8',
				Accept: 'application/json',
			},
			body: JSON.stringify(payload),
		});

		return await res.json();
	}
}
