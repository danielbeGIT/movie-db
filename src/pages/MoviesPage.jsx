// Imported react & stuff
import { getMovie } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

const MoviesPage = () => {
	const { movieId } = useParams()
    const { data, isLoading, error, isError } = useQuery(['movie', movieId ], () => getMovie(movieId))
    const baseImage = "https://image.tmdb.org/t/p/w300"

	return (
		<Container className='my-2 p-2'>
            {isLoading && (
                <p>Loading movie..</p>
            )}
            
            {isError && (
                <p>{error.message}</p>
            )}

            {data && (
                <>
                    <div className="movie_info">
                        {data.poster_path && (
                            <img src={`${baseImage}${data.poster_path}`} className="mb-3"/>
                        )}
                        <h1>{data.title}</h1>
                        <div className='d-flex flex-column'>
                            <p>
                                <strong>Genre: </strong>
                                {data.genres.map(index => index.name).join(', ')}
                            </p>

                            <p>
                                <strong>Release Date: </strong>
                                {data.release_date}
                            </p>

                            <p>
                                <strong>Original Language: </strong>
                                {data.original_language}
                            </p>

                            <p>
                                <strong>Ratings: </strong>
                                {data.vote_average}
                                <span className='text-muted'> ({data.vote_count})</span>
                            </p>
                        </div>

                        <br />
                        
                        <h3>Overview</h3>
                        <p>{data.overview}</p>
                    </div>

                    <div className="cast_info">
                        <h3>Cast</h3>
                        <div className='d-flex flex-wrap justify-content-evenly'>
                            {data.credits.cast.map(index => (
                                <Card 
                                    key={index.id} 
                                    className='m-1 mb-5 col-lg-3 col-md-5 col-sm-9'
                                >
                                    {index.profile_path && (
                                        <Card.Img src={`${baseImage}${index.profile_path}`} />
                                    )}

                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title>{index.name}</Card.Title>
                                        <Card.Text>{index.character}</Card.Text>

                                        <Button 
                                            className='mt-auto' 
                                            as={Link} 
                                            to={`/actor/${index.id}`} 
                                            variant="dark"
                                        >
                                            Read more
                                        </Button>
                                        
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </Container>
	)
}

export default MoviesPage