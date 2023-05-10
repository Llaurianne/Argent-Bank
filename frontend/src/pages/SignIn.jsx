import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, logUser } from '../features/user'
import { selectUser } from '../utils/selectors'
import { Navigate } from 'react-router-dom'

function SignIn() {
	document.title = 'Argent Bank - Sign in'

	const [checked, setChecked] = useState(false)

	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange = () => {
		setChecked(!checked)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		localStorage.clear()
		sessionStorage.clear()
		const form = e.target
		const formData = new FormData(form)
		const loginData = Object.fromEntries(formData.entries())
		await dispatch(logUser(loginData, checked))
		dispatch(fetchUser())
		navigate('/profile')
	}

	return (
		<main className="main bg-dark">
			{user.status === 'resolved' && user.data.status === 200 ? (
				<Navigate to="/profile" />
			) : (
				<section className="sign-in-content">
					<FontAwesomeIcon icon={faUserCircle} />
					<h1>Sign In</h1>
					<form method="post" onSubmit={handleSubmit}>
						<div className="input-wrapper">
							<label htmlFor="email">Username</label>
							<input type="text" id="email" name="email" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
							/>
						</div>
						<div className="input-remember">
							<input
								type="checkbox"
								id="remember-me"
								name="remember-me"
								checked={checked}
								onChange={handleChange}
							/>
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className="sign-in-button" type="submit">
							Sign In
						</button>
					</form>
				</section>
			)}
		</main>
	)
}

export default SignIn
