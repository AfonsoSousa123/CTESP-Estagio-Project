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
            <Nav className="ml-auto">
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

        {/* <Navbar
          alignLinks="right"
          brand={
            <a className="brand-logo" href="#">
              Logo
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem href="#">Getting started</NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar> */}
      </div>
    );
  }
}
