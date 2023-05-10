import { useSelector } from 'react-redux'
import { selectEditMode } from '../utils/selectors'

function AccountOverview({ type, code, balance }) {
	const editMode = useSelector(selectEditMode)

	const usd = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	})

	return (
		<section className={`account ${editMode ? `account-light` : null}`}>
			<div className="account-content-wrapper">
				<h3 className="account-title">
					{`Argent Bank ${type} (x${code})`}
				</h3>
				<p className="account-amount">{usd.format(balance)}</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button
					className={`transaction-button ${
						editMode ? `transaction-button-light` : null
					}`}
				>
					View transactions
				</button>
			</div>
		</section>
	)
}

export default AccountOverview
