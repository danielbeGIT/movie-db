// Imported stuff
import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/App.scss'

// Imported components
import Navigation from './components/Navigation'

// Imported pages
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import ActorsPage from './pages/ActorsPage'
import GenresPage from './pages/GenresPage'
import PopularPage from './pages/PopularPage'
import TheatresPage from './pages/TheatresPage'
import TopRatedPage from './pages/TopRatedPage'
import NotFound from './pages/NotFound'

function App() {
	return (
		<div id="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/:movieId" element={<MoviesPage />} />
				<Route path="/actor/:actorId" element={<ActorsPage />} />
				<Route path="/genres/:genreId" element={<GenresPage />} />
				<Route path="/Popular" element={<PopularPage />} />
				<Route path="/theatres" element={<TheatresPage />} />
				<Route path="/top_rated" element={<TopRatedPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ReactQueryDevtools />
		</div>
	)
}

export default App