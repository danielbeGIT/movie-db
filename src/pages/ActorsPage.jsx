// Imported react & stuff
import { getActors } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

const ActorsPage = () => {
	const { actorId } = useParams()
    const { data, isLoading, error, isError } = useQuery(['actor', actorId], () => getActors(actorId))
    const baseImage = "https://image.tmdb.org/t/p/w300"

	return (
		<Container className='my-2 p-2'>
            {isLoading && (
                <p>Loading actor..</p>
            )}
            
            {isError && (
                <p>{error.message}</p>
            )}

            {data && (
                <>
                    <div className="actor_info">
                        <h1>{data.name}</h1>
                        {data.profile_path && (
                            <img src={`${baseImage}${data.profile_path}`} className="mb-3"/>
                        )}
                        <p>
                            <strong>Born: </strong>
                            {data.birthday}
                        </p>

                        <p>
                            <strong>From: </strong>
                            {data.place_of_birth}
                        </p>

                        <h3>Biography: </h3>
                        <p>{data.biography}</p>

                        <br />

                        <h3>Known For</h3>
                        <div className='d-flex flex-wrap justify-content-evenly'>
                            {data.credits.cast.map(index => (
                                <Card 
                                    key={index.id} 
                                    className='m-1 mb-5 col-lg-3 col-md-5 col-sm-9'
                                >
                                    {index.poster_path && (
                                        <Card.Img src={`${baseImage}${index.poster_path}`} />
                                    )}

                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title>{index.title}</Card.Title>
                                        <Card.Text>{index.character}</Card.Text>

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
                    </div>
                </>
            )}
        </Container>
	)
}

export default ActorsPage