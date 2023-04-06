// Imported react
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Movie DB</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/movie/:movieId" end>Latest Movies</Nav.Link>
						<Nav.Link as={NavLink} to="/Popular" end>Popular</Nav.Link>
						<Nav.Link as={NavLink} to="/top_rated" end>Top Rated</Nav.Link>
						<Nav.Link as={NavLink} to="/actor/:actorId" end>Actor</Nav.Link>
						<Nav.Link as={NavLink} to="/genres" end>Genres</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation