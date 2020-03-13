import React from 'react';
import { Card } from 'bootstrap-4-react';

export function MovieCard({ data, isFavorite }) {
	const starIcon = (isFavorite) ? 'fas fa-star' : 'fas fa-star-empty';
	const poster = data.Poster !== 'N/A' ? data.Poster : process.env.PUBLIC_URL + '/no-poster.jpg'; 

	return (
		<Card className="h-100 shadow-sm bg-white rounded" style={{ width: '280px' }}>
			<Card.Image variant="top" src={ poster }  style={{ width: '280px', height: '340px' }} />
			<Card.Body className="d-flex flex-column">
				<div className="d-flex mb-2 justify-content-between">
					<Card.Title className="mb-0 font-weight-bold">
						{ data.Title }
					</Card.Title>
					<i className="fa { starIcon }"></i>
				</div>
				<Card.Text className="text-secondary">
					{ data.Year }
				</Card.Text>
			</Card.Body>
		</Card>
	)
}