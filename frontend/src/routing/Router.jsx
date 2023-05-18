import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/Root'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import Error from '../pages/Error'

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
				path: 'login',
				element: <SignIn />,
			},
			{
				path: 'profile',
				element: <User />,
			},
		],
	},
])

export default router
