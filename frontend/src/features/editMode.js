import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const editModeSlice = createSlice({
	name: 'editMode',
	initialState,
	reducers: {
		toggle: (state) => {
			return state !== true
		},
	},
})

const { actions, reducer } = editModeSlice
export const { toggle } = actions
export default reducer
