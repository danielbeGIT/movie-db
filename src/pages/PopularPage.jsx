import { Container } from 'react-bootstrap'
import { getPopular } from '../services/MovieDB'
import { useQuery } from 'react-query'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['popular'], getPopular)
    console.log(data)

    return (
        <Container>
            <h1>20 Popular Movies</h1>

            {isLoading && (
                <p>Loading movies...</p>
            )}

            {isError && (
                <p>{error.message}</p>
            )}

            {data && 
                <h1>data is showing</h1>
            }
        
        </Container>
    )
}

export default PopularPage