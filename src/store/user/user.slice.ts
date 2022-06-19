import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'store';

const initialState: IUserState = {
	username: '',
	isAuthenticate: false,
};
const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authSignIn: (state, action: PayloadAction<IUserState['username']>) => {
			console.log(action.payload, 'payload');

			state.username = action.payload;
			state.isAuthenticate = true;
		},
		authSignOut: (state) => {
			state.username = '';
			state.isAuthenticate = false;
		},
	},
});

export default slice.reducer;

export const { authSignIn, authSignOut } = slice.actions;

export const getUserState = (state: AppState): typeof initialState => state.user;

type IPopup = {
	isActive: boolean;
	type: 'register' | 'signin' | 'forgot-password';
};

type IUserState = {
	username: string;
	isAuthenticate: boolean;
};
