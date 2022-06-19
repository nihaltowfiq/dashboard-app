import { ISingleUser } from 'components/templates';
import { placeholderAPI } from 'libs/api';
import { AppThunk } from 'store';
import { createUser, deleteSingleUser, getData, updateSingleUser } from './data.slice';

export const fetchAllData = (): AppThunk<void> => {
	return async (dispatch) => {
		try {
			const data = await placeholderAPI.getUsersData();
			dispatch(getData(data));
		} catch (error) {}
	};
};

export const handleDeleteSingleUser = (id: number): AppThunk<void> => {
	return async (dispatch) => {
		try {
			await placeholderAPI.deleteUser(id);
			dispatch(deleteSingleUser(id));
		} catch (error) {}
	};
};

export const handleUpdateSingleUser = (id: number, payload: ISingleUser): AppThunk<void> => {
	return async (dispatch) => {
		try {
			await placeholderAPI.updateUser(id, payload);
			dispatch(updateSingleUser({ id, obj: payload }));
		} catch (error) {}
	};
};

export const handleCreateUser = (payload: ISingleUser): AppThunk<void> => {
	return async (dispatch) => {
		try {
			await placeholderAPI.createUser(payload);
			dispatch(createUser(payload));
		} catch (error) {}
	};
};
