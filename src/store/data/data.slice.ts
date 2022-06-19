import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISingleUser } from 'components/templates';
import { IDataType } from 'libs/api/interfaces';
import { AppState } from 'store';
import { findLargestNumber } from 'utils/helpers';

const initialState: IDataState = {
	users: [],
	data: [],
	isDataGetted: false,
};
const slice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		getData: (state, { payload }: PayloadAction<IDataState['data']>) => {
			state.data = payload;
			state.users = payload;
			state.isDataGetted = true;
		},
		sortedData: ({ data }) => {
			data = data.reverse();
		},
		filterByName: (state, { payload }: PayloadAction<string>) => {
			if (payload.length > 0) {
				state.data = state.users.filter(({ name }) => name.toLowerCase().includes(payload.toLowerCase()));
			} else {
				state.data = state.users;
			}
		},
		deleteSingleUser: (state, { payload }: PayloadAction<number>) => {
			const arr = state.users.filter(({ id }) => id !== payload);
			state.data = arr;
			state.users = arr;
		},
		updateSingleUser: (state, { payload }: PayloadAction<{ id: number; obj: ISingleUser }>) => {
			const arr = state.users.map((el) => {
				if (el.id === payload.id) {
					el['name'] = payload.obj.name;
					el['phone'] = payload.obj.phone;
					el['email'] = payload.obj.email;
				}
				return el;
			});
			state.data = arr;
			state.users = arr;
		},
		createUser: (state, { payload }: PayloadAction<ISingleUser>) => {
			const maxNum = findLargestNumber(state.users.map((el) => el.id));
			const newUser = { id: maxNum + 1, ...payload };
			state.data.push(newUser);
			state.users.push(newUser);
		},
	},
});

export default slice.reducer;

export const { getData, sortedData, filterByName, deleteSingleUser, updateSingleUser, createUser } = slice.actions;

export const getDataState = (state: AppState): typeof initialState => state.data;

type IDataState = {
	users: IDataType[];
	data: IDataType[];
	isDataGetted: boolean;
};
