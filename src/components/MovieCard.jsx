import React from 'react';
import { Card } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons' // ES Module "as" syntax
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

export function MovieCard({ data, isFavorite }) {
    const favColor  = isFavorite === true ? 'warning' : 'dark';
    const favorite  = isFavorite === true ? fasFaStar : farFaStar;
    const poster    = data.Poster !== 'N/A' ? data.Poster : process.env.PUBLIC_URL + '/no-poster.jpg'; 

    function setFavorite (data, element) {
        if(isFavorite){
            localStorage.setItem(data.imdbID, data);
        }else{
            localStorage.removeItem(data.imdbID);
        }
    }

    return (
        <Card className="h-100 shadow-sm bg-white rounded" style={{ width: '280px' }}>
            <Card.Image variant="top" src={ poster }  style={{ width: '280px', height: '340px' }} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        { data.Title }
                    </Card.Title>
                    <FontAwesomeIcon icon={ favorite } className={ 'text-' + favColor } />
                </div>
                <Card.Text className="text-secondary">
                    { data.Year }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}