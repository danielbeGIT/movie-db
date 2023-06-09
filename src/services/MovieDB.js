import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

const get = async (endP) => {
    const res = await axios.get(endP)
    return res.data
}

// Get specific actor
export const getActors = (id) => {
    return get(`${BASE_URL}/person/${id}?api_key=${API_KEY}&include_adult=false&language=en-US&append_to_response=credits`)
}

// Get genres
export const getGenres = () => {
    return get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&include_adult=false&language=en-US`)
}

// Get specific genre
export const getGenre = (id, page) => {
    return get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${id}&page=${page}`)
}

// Get specific movie
export const getMovie = (id) => {
    return get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&include_adult=false&language=en-US&append_to_response=credits`)
}

// Get popular movies
export const getPopular = () => {
    return get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
}

// Get movies in theatres
export const getTheatres = () => {
    return get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
}

// Get top rated movies
export const getTopRated = () => {
    return get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
}

export default {
    getActors,
    getGenres,
    getGenre,
    getMovie,
    getPopular,
    getTheatres,
    getTopRated,
}