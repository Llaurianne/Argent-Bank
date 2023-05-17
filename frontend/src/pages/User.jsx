import accounts from '../utils/mockup/accounts'
import AccountOverview from '../components/AccountOverview'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditMode } from '../utils/selectors'
import { Link, Navigate } from 'react-router-dom'
import * as editModeActions from '../features/editMode'
import { updateUser } from '../features/user'
import styled from 'styled-components'

const StyledInput = styled.input`
	width: 5vw;
	min-width: 200px;
	margin: 6px 7px;
	padding: 12px;
	border: solid 2px #becad4;
	border-radius: 5px;
	font-size: 18px;
	font-weight: 600;
	::placeholder {
		color: #becad4;
	}
`

const StyledButton = styled.button`
	width: 5vw;
	min-width: 120px;
	margin: 6px 7px;
	padding: 8px;
	border: solid 2px #b3b2f0;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 600;
	background-color: white;
	color: #6357f6;
`

function User() {
	document.title = 'Argent Bank - User dashboard'

	const user = useSelector(selectUser)
	const editMode = useSelector(selectEditMode)
	const dispatch = useDispatch()
	const [firstname, setFirstname] = useState()
	const [lastname, setLastname] = useState()
	const newProfile = {
		firstName: firstname,
		lastName: lastname,
	}

	return (
		<main className={`main ${editMode ? `bg-light` : `bg-dark`}`}>
			{user.status === 'rejected' ||
			(user.status === 'resolved' && user.data.status === 401) ? (
				<Navigate to="/error" />
			) : user.status === 'pending' || user.status === 'updating' ? (
				<div className="header">
					<h1>Loading...</h1>
				</div>
			) : user.status === 'void' ? (
				<div className="header">
					<h1>Please sign in to access your accounts</h1>
					<Link to="/login">Go to sign in page</Link>
				</div>
			) : (
				<div className={`header ${editMode ? `header-light` : null}`}>
					<h1>
						Welcome back
						<br />
						{!editMode
							? user.data.body.firstName +
							  ' ' +
							  user.data.body.lastName +
							  '!'
							: null}
					</h1>
					{!editMode ? (
						<button
							className="edit-button"
							onClick={() => dispatch(editModeActions.toggle())}
						>
							Edit Name
						</button>
					) : (
						<div>
							<div>
								<StyledInput
									type="text"
									name={firstname}
									placeholder={user.data.body.firstName}
									onChange={(e) =>
										setFirstname(e.target.value)
									}
								/>
								<StyledInput
									type="text"
									name={lastname}
									placeholder={user.data.body.lastName}
									onChange={(e) =>
										setLastname(e.target.value)
									}
								/>
							</div>
							<div>
								<StyledButton
									className="edit-button"
									onClick={() => {
										dispatch(updateUser(newProfile))
									}}
								>
									Save
								</StyledButton>
								<StyledButton
									className="edit-button"
									onClick={() =>
										dispatch(editModeActions.toggle())
									}
								>
									Cancel
								</StyledButton>
							</div>
						</div>
					)}
				</div>
			)}
			<h2 className="sr-only">Accounts</h2>
			{user.status === 'resolved' && user.data.status === 200
				? accounts.map((acc) => (
						<AccountOverview
							key={acc.type}
							type={acc.type}
							code={acc.code}
							balance={acc.balance}
						/>
				  ))
				: null}
		</main>
	)
}

export default User
