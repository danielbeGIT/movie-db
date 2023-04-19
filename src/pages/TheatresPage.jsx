// Imported react & stuff
import { getTheatres } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap'

// Imported components
import MovieCard from '../components/MovieCard'

const TheatresPage = () => {
	const {data, isLoading, error, isError} = useQuery(['theatres'], getTheatres)

    return (
        <Container className='my-2 p-2'>
            <h1>Currently in Theatres</h1>

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

export default TheatresPage