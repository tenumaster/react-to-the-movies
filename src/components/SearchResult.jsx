import React from 'react';
import { useGet } from "restful-react";
import { Container, Row, Col, Collapse } from 'bootstrap-4-react';
import { MovieCard } from './MovieCard';


export default function SearchResult(data) {
    const { data: movies } = useGet({
        path: "https://www.omdbapi.com/?apikey=5b7ddec2&type=movie&s=" + data.data
    });


  return (
    <div className="container">
        <Container>
            <Row>
                { movies && (movies.Search.map((data, key) => (
                    <Col xs={4} className="mb-5 mr-5" key={ data.imdbID } target={'#movie' + data.imdbID} aria-expanded='false' aria-controls={data.imdbID}>
                        <MovieCard data={ data } isFavorite={ true } />
                    </Col>
                    )))
                }
            </Row>
        </Container>
    </div>    
  );
};