import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/Root'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import Error from '../pages/Error'

const username = 'Tony Jarvis'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'sign-in',
				element: <SignIn />,
			},
			{
				path: 'user',
				element: <User username={username} />,
			},
		],
	},
])

export default router
