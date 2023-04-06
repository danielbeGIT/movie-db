import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
            <h1>Welcome to Movie encyclopedia</h1>
            <p>
                <strong>Dare to click this link</strong>
                <Link to="/not-found">THE LINK</Link>
            </p>
        </>
	)
}

export default HomePage