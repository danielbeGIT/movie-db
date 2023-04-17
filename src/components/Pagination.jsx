import { Button } from 'react-bootstrap'

const Pagination = ({ page, currentPage, previousPage }) => {
	return (
		<div className="d-flex justify-content-between align-items-center w-25 m-auto">

			<Button 
				disabled={previousPage || page <= 1} 
				onClick={() => currentPage({
					page: Number(page) - 1
				})} 
				variant='dark'
			>
				Previous
			</Button>

				<span>Page(s): {page}/500</span>

			<Button 
				disabled={previousPage || page >= 500} 
				onClick={() => currentPage({
					page: Number(page) + 1
				})} 
				variant='dark'
			>
				Next
			</Button>
		</div>
	)
}

export default Pagination