// Imported react & stuff
import { getTopRated } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap'

// Imported components
import MovieCard from '../components/MovieCard'

const TopRatedPage = () => {
	const {data, isLoading, error, isError} = useQuery(['top_rated'], getTopRated)

    return (
        <Container className='my-2 p-2'>
            <h1>Top Rated Movies</h1>

            {isLoading && (
				<p>Loading movies...</p>
			)}

            {isError && (
				<p>ERROR {error.message}</p>
			)}

            {data && 
				<MovieCard data={data}/>
			}
        </Container>
    )
}

export default TopRatedPage