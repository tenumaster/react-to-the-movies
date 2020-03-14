import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Navbar, Button, Form, Collapse, BImg } from 'bootstrap-4-react';

import SearchResult from './SearchResult';

export default class App extends Component {
    letSearch(e) {
        e.preventDefault();

        const movieName = document.getElementById("searchText").value;
        if (movieName.value !== "") {
            ReactDOM.render(<SearchResult data={movieName}  />, document.getElementById('content'));
        }

    }

    render() {
        const my_icon = process.env.PUBLIC_URL + '/logo.png';

        return (
            <React.Fragment>
                <Navbar expand="sm" light style={{ backgroundColor: '#e3f2fd' }} mb="3">
                    <Navbar.Brand href="./">
                      <BImg
                        src={my_icon}
                        width="180"
                        height="45"
                        display="inline-block"
                        align="top"
                        mr="1"
                      />
                    </Navbar.Brand>
                    <Navbar.Toggler target="#searchToggle" />
                    <Collapse navbar id="searchToggle">
                        <Navbar.Nav mr="auto">
                        </Navbar.Nav>
                        <Form inline my="2 lg-0">
                            <Form.Input type="search" placeholder="Película" mr="sm-2" id="searchText" />
                            <Button outline primary my="2 sm-0" onClick={this.letSearch}>Buscar</Button>
                        </Form>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}