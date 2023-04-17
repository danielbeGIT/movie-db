import { getActors } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ActorsPage = () => {
	const { actorId } = useParams()
    console.log(actorId)
    const { data, isLoading, error, isError } = useQuery(['actor', actorId], () => getActors(actorId))
    console.log(data)

	return (
		<Container>
            {isLoading && (
                <p>Loading actor..</p>
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

export default ActorsPage