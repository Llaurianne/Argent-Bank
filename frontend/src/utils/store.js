import userReducer from '../features/user'
import editModeReducer from '../features/editMode'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
	reducer: {
		user: userReducer,
		editMode: editModeReducer,
	},
})
