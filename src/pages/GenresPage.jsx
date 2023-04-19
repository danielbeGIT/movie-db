// Imported react & stuff
import { getGenre } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const GenresPage = () => {
    const { genreId } = useParams()
    const { data, isLoading, error, isError } = useQuery(['genre', genreId], () => getGenre(genreId))

	return (
		<Container className='my-2 p-2'>
            {isLoading && (
				<p>Loading movies...</p>
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

export default GenresPage