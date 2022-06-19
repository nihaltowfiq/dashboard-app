/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ISingleUser } from 'components/templates';
import { BaseAPI } from './baseAPI';
import { IDataType } from './interfaces';

class PlaceHolderAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getUsersData = () => this.get<IDataType[]>('users');

	deleteUser = (id: number) => this.delete(`users/${id}`);

	updateUser = (id: number, payload: ISingleUser) => this.put(`users/${id}`, payload);

	createUser = (payload: ISingleUser) => this.post('users', payload);
}

export const placeholderAPI = new PlaceHolderAPI(process.env.REACT_APP_PLACEHOLDER_API);
