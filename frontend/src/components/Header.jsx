import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function Header() {
	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to="sign-in" className="main-nav-item">
					<FontAwesomeIcon icon={faUserCircle} />
					{` Sign In `}
				</Link>
				<Link to="user" className="main-nav-item">
					<FontAwesomeIcon icon={faUserCircle} />
					{` Tony `}
				</Link>
				<Link to="/" className="main-nav-item">
					<FontAwesomeIcon icon={faSignOut} />
					{` Sign Out `}
				</Link>
			</div>
		</nav>
	)
}

export default Header
