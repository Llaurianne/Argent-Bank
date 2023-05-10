import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/Root'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import Error from '../pages/Error'
import Edit from '../pages/Edit'

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
				children: [
					{ index: true, element: <User /> },
					{ path: 'edit', element: <Edit /> },
				],
			},
		],
	},
])

export default router
