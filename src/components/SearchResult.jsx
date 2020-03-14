import React from 'react';
import { useGet } from "restful-react";
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';
import { MovieCard } from './MovieCard';

export default function SearchResult(data) {
    const { data: movies } = useGet({
        path: "https://www.omdbapi.com/?apikey=5b7ddec2&type=movie&s=" + data.data
    });
    if(movies){
        if(movies.Response === "True"){
            return (
                <div className="container">
                    <Container>
                        <Row>
                            { movies && (movies.Search.map((data, key) => (
                                <Col xs={4} className="mb-5 mr-5" key={ data.imdbID } target={'#movie' + data.imdbID} aria-expanded='false' aria-controls={data.imdbID}>
                                    <MovieCard data={ data } isFavorite={ false } />
                                </Col>
                                )))
                            }
                        </Row>
                    </Container>
                </div>    
            );
        }else{
            return (
            <Container>
                <BDiv mx="auto" style={{ width: '800px' }}>
                    <h2>¡{ movies.Error === "Too many results." ? 'Su texto es demasiado genérico D: y no aguanto tanta información' : 'Su busqueda no arrojó resultados :C'}! </h2>
                </BDiv>
            </Container>
            )
        }
    }else{
        return (
            <Container>
                <BDiv mx="auto" style={{ width: '637px' }}>
                    <h2>Cargando... </h2>
                </BDiv>
            </Container>
        )
    }
};