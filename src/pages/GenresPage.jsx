// Imported react & stuff
import { getGenre, getGenres } from '../services/MovieDB'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'

// Imported components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const GenresPage = () => {
	const [genreName, setGenreName] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({query: '', page: 1})
    const page = searchParams.get('page')
    
    const { genreId } = useParams()
    const { data, isLoading, error, isError, previousPage } = useQuery(['genre', genreId, page], () => getGenre(genreId, page), {
        keepPreviousData: true
    })

    const getActiveGenre = async () => {
        const allGenres = await getGenres()
        const eachGenre = allGenres.genres.find(index => index.id == genreId)
        setGenreName(eachGenre.name)
    }

    useEffect(() => {
        getGenre(genreId, page)
        getActiveGenre()
    }, [page, genreId])

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
                    <h1>{genreName}</h1>

                    <MovieCard data={data}/>

                    <Pagination page={page} currentPage={setSearchParams} previousPage={previousPage}/>
                </>
            )}
        </Container>
	)
}

export default GenresPage