import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
/*import { Navbar, NavItem, Icon } from "react-materialize";
import "materialize-css";*/

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <div class="container">
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

            <Nav>
              <NavLink className="nav-link" to="/signin">
                Sign In
              </NavLink>
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
