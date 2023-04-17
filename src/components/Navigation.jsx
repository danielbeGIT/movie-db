// Imported react & stuff
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, NavLink } from 'react-router-dom'
import { getGenres } from '../services/MovieDB'
import { useQuery } from 'react-query'

const Navigation = () => {
	const { data } = useQuery(['genres'], getGenres)

    return (
        <Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Movie Database</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">

						{data && (
							<Dropdown>
								<Dropdown.Toggle variant="dark" id="dropdown-basic">Genres</Dropdown.Toggle>

								<Dropdown.Menu>
									{data.genres.map(index => (
										<Dropdown.Item 
											value="1" 
											key={index.id} 
											size="sm" 
											as={NavLink} 
											to={`/genres/${index.id}`}
										>
											{index.name}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						)}

						<Nav.Link as={NavLink} to="/Popular" end>Popular</Nav.Link>
						<Nav.Link as={NavLink} to="/top_rated" end>Top Rated</Nav.Link>
						<Nav.Link as={NavLink} to="/theatres" end>In Theatres</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation