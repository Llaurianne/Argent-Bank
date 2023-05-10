import { createSlice } from '@reduxjs/toolkit'
import { selectUser } from '../utils/selectors'
import * as editModeActions from './editMode'

const initialState = {
	status: 'void',
	data: null,
	error: null,
}

export function logUser(loginData, checked) {
	return async (dispatch, getState) => {
		const status = selectUser(getState()).status
		if (status === 'pending' || status === 'updating') {
			return
		}
		dispatch(actions.fetching())
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(loginData),
				}
			)
			const data = await response.json()
			dispatch(actions.resolved(data))
			if (checked) {
				localStorage.setItem('token', data.body.token)
			} else {
				sessionStorage.setItem('token', data.body.token)
			}
		} catch (error) {
			dispatch(actions.rejected(error))
		}
	}
}

export function fetchUser() {
	return async (dispatch, getState) => {
		const status = selectUser(getState()).status
		if (status === 'pending' || status === 'updating') {
			return
		}
		dispatch(actions.fetching())
		const token = `Bearer ${
			localStorage.getItem('token') ?? sessionStorage.getItem('token')
		}`
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'POST',
					headers: {
						Authorization: token,
					},
				}
			)
			const data = await response.json()
			dispatch(actions.resolved(data))
		} catch (error) {
			dispatch(actions.rejected(error))
			console.log('===== error =====', error)
		}
	}
}

export function updateUser(newProfile) {
	return async (dispatch, getState) => {
		const status = selectUser(getState()).status
		if (status === 'pending' || status === 'updating') {
			return
		}
		dispatch(actions.fetching())
		const token = `Bearer ${
			localStorage.getItem('token') ?? sessionStorage.getItem('token')
		}`
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: token,
					},
					body: JSON.stringify(newProfile),
				}
			)
			const data = await response.json()

			dispatch(actions.resolved(data))
			dispatch(editModeActions.toggle())
		} catch (error) {
			dispatch(actions.rejected(error))
		}
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetching: (draft, action) => {
			if (draft.status === 'void') {
				draft.status = 'pending'
				return
			}
			if (draft.status === 'rejected') {
				draft.error = null
				draft.status = 'pending'
				return
			}
			if (draft.status === 'resolved') {
				draft.status = 'updating'
				return
			}
			return
		},
		resolved: (draft, action) => {
			if (draft.status === 'pending' || draft.status === 'updating') {
				draft.data = action.payload
				draft.status = 'resolved'
				return
			}
			return
		},
		rejected: (draft, action) => {
			if (draft.status === 'pending' || draft.status === 'updating') {
				draft.error = action.payload
				draft.data = null
				draft.status = 'rejected'
				return
			}
			return
		},
		reset: () => {
			return initialState
		},
	},
})

const { actions, reducer } = userSlice
export const { reset } = actions
export default reducer
