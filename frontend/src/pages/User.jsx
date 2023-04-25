import accounts from '../utils/content/accounts'
import AccountOverview from '../components/AccountOverview'

function User({ username }) {
	document.title = 'Argent Bank - User dashboard'

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{username}!
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((acc) => (
				<AccountOverview
					key={acc.type}
					type={acc.type}
					code={acc.code}
					balance={acc.balance}
				/>
			))}
		</main>
	)
}

export default User
