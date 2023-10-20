import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
	name: 'accounts',
	initialState: {
		accounts: [],
		monthlyPayment: 0
	},
	reducers: {
		createAccount: (state, action) => {
			const amount = Number(action.payload);
			state.accounts.push({ balance: amount });
		},
		setMonthly: (state, action) => {
			state.monthlyPayment = Number(action.payload)
		}
	},
});

export const { createAccount, setMonthly } = user.actions;

export default user.reducer;
