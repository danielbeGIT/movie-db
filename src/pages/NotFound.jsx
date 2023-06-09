import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import NotSurprises from '../assets/images/NoSurprises.gif'

const NotFound = () => {
	return (
		<Container className='my-2 p-2'>
			<h1>No Movies & Actors here</h1>
			<Image src={NotSurprises} fluid />
		</Container>
	)
}

export default NotFound