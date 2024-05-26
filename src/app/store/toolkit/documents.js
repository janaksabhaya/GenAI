import { appConfig } from "@/configs";
import { helper } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	documentFilter: {
		fundId: "",
		fundName: "",
		accountName: "",
		firmName: "",
	},
};

export const documentSlice = createSlice({
	name: "documents",
	initialState,
	reducers: {
		setFilters: (state, action) => {
			state = {
				...state,
				documentFilter: {
					...state.documentFilter,
					...action.payload
				},
			};
			return state;
		},
	},
});

export default documentSlice.reducer;
export const { setFilters } = documentSlice.actions;
