import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorContainer = styled.div`
	padding-top: 20vh;
	height: calc(80vh - 160.38px);
`

const StyledP = styled.p`
	font-size: 64px;
`

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 64px;
	color: #00bc77;
`

function Error() {
	document.title = 'Argent Bank - Error'

	return (
		<>
			<Header />
			<ErrorContainer>
				<StyledIcon icon={faBug} />
				<StyledP>404 Error</StyledP>
				<p>This page doesn't exist</p>
				<Link to="/">Go back to the homepage</Link>
			</ErrorContainer>
			<Footer />
		</>
	)
}
export default Error
