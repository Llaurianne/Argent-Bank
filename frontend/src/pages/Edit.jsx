import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditContainer = styled.div`
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

function Edit() {
	document.title = 'Argent Bank - Error'

	return (
		<>
			<EditContainer>
				<p>Edit page</p>
				<Link to="/profile">Go back to profile page</Link>
			</EditContainer>
		</>
	)
}
export default Edit
