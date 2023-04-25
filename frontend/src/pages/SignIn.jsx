import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
	document.title = 'Argent Bank - Sign in'

	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [checked, setChecked] = useState(false)

	const toggleCheckbox = () => {
		setChecked(!checked)
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FontAwesomeIcon icon={faUserCircle} />
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="input-remember">
						<input
							type="checkbox"
							id="remember-me"
							checked={checked}
							onChange={toggleCheckbox}
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					{/*PLACEHOLDER DUE TO STATIC SITE
					<a href="./user.html" className="sign-in-button">
						Sign In
					</a>*/}
					{/* SHOULD BE THE BUTTON BELOW */}
					<button className="sign-in-button">Sign In</button>
				</form>
			</section>
		</main>
	)
}

export default SignIn
