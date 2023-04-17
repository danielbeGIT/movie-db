import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const HomePage = () => {
	return (
		<Container className='my-2 p-2'>
            <h1>Welcome to Movie DB</h1>
            <p>This APP uses TMBD API.</p>
            <strong>Don't click this →</strong>
            <Link to="/not-found"> CLICK ME</Link>
        </Container>
	)
}

export default HomePage