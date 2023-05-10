import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditMode, selectUser } from '../utils/selectors'
import { fetchUser, reset } from '../features/user'
import { useEffect } from 'react'

function Header() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const editMode = useSelector(selectEditMode)

	useEffect(() => {
		if (
			(localStorage.getItem('token') ||
				sessionStorage.getItem('token')) &&
			user.status === 'void'
		) {
			dispatch(fetchUser())
		}
	}, [editMode])

	function signOut() {
		localStorage.clear()
		sessionStorage.clear()
		dispatch(reset())
	}

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
				{user.status === 'resolved' && user.data.status === 200 ? (
					<>
						<Link to="/profile" className="main-nav-item">
							<FontAwesomeIcon icon={faUserCircle} />
							{` ${user.data.body.firstName} `}
						</Link>
						<Link
							to="/"
							className="main-nav-item"
							onClick={signOut}
						>
							<FontAwesomeIcon icon={faSignOut} />
							{` Sign Out `}
						</Link>
					</>
				) : (
					<Link to="/login" className="main-nav-item">
						<FontAwesomeIcon icon={faUserCircle} />
						{` Sign In `}
					</Link>
				)}
			</div>
		</nav>
	)
}

export default Header
