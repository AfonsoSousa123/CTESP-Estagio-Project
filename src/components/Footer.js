import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Grid } from '@material-ui/core';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="wrapper clearfix">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Navbar bg="dark" variant="dark">
                                <div className="container">
                                    <Nav>
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                    <NavLink className="nav-link" to="/makeyourown">
                                        Make Your Own
                                    </NavLink>
                                    <NavLink className="nav-link" to="/predefine">
                                        Predefine
                                    </NavLink>
                                    </Nav>
                                </div>
                            </Navbar>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <div className="container">
                                <ul className="madeby">
                                    <p>Made By</p>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        )
    }
}