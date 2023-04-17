import { getMovie } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const MoviesPage = () => {
	const { movieId } = useParams()
    console.log(movieId)
    const { data, isLoading, error, isError } = useQuery(['movie', movieId ], () => getMovie(movieId))
    console.log(data)

	return (
		<Container>
            {isLoading && (
                <p>Loading movie..</p>
            )}
            
            {isError && (
                <p>{error.message}</p>
            )}

            {data && (
                <>
                    <h1>Showing data..</h1>
                </>
            )}
        </Container>
	)
}

export default MoviesPage