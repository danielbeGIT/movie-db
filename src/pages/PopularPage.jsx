import { getPopular } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap'

// Imported components
import MovieCard from '../components/MovieCard'

const PopularPage = () => {
    const { data, isLoading, error, isError } = useQuery(['popular'], getPopular)

    return (
        <Container>
            <h1>Popular Movies</h1>

            {isLoading && (
                <p>Loading movies...</p>
            )}

            {isError && (
                <p>{error.message}</p>
            )}

            {data && 
                <MovieCard data={data}/>
            }
        </Container>
    )
}

export default PopularPage