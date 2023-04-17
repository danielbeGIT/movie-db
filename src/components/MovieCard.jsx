import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
	const baseImage = "https://image.tmdb.org/t/p/w500"
	console.log(data)

	return (
		<div className='d-flex flex-wrap justify-content-evenly'>
			{data.results.map(index => (
				<Card 
					className='m-1 mb-5 col-lg-3 col-md-5 col-sm-9' 
					key={index.id}
				>
					{index.poster_path && (
						<Card.Img variant="top" src={`${baseImage}${index.poster_path}`}/>
					)}

					<Card.Body className='d-flex flex-column'>
						<Card.Title>{index.title}</Card.Title>
						<Card.Text className='text-muted'>{index.overview}</Card.Text>

						<Button 
							className='mt-auto' 
							as={Link} 
							to={`/movie/${index.id}`} 
							variant="dark"
						>
							Read more
						</Button>

					</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default MovieCard