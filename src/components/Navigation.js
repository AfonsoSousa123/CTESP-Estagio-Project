import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to='/'>
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to='/makeyourown'>
                            Make Your Own
                        </NavLink>
                        <NavLink className="nav-link" to='/predefine'>
                            Predefine
                        </NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}