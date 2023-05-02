import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
	document.title = 'Argent Bank - Sign in'
	const [loading, setLoading] = useState(false)
	const [checked, setChecked] = useState(false)

	const handleChange = () => {
		setChecked(!checked)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		setLoading(true)
		localStorage.setItem('token', '')
		sessionStorage.setItem('token', '')
		const form = e.target
		const formData = new FormData(form)
		const loginData = Object.fromEntries(formData.entries())
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
			if (checked) {
				localStorage.setItem('token', data.body.token)
			} else {
				sessionStorage.setItem('token', data.body.token)
			}
		} catch (err) {
			console.log('===== error =====', err)
		} finally {
			setLoading(false)
			console.log('local ' + localStorage.getItem('token'))
			console.log('session ' + sessionStorage.getItem('token'))
		}
	}

	return (
		<main className="main bg-dark">
			{!loading ? (
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
			) : (
				<p>Loading...</p>
			)}
		</main>
	)
}

export default SignIn
