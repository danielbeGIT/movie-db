import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
            <h1>Welcome to Movie DB</h1>
            <p>
                <strong>Don't click this →</strong>
                <Link to="/not-found"> CLICK ME</Link>
            </p>
        </>
	)
}

export default HomePage