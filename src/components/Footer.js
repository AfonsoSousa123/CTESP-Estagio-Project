import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="wrapper clearfix">
                        <ul className="footer-nav">
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Make Your Own
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Predefine
                                </a>
                            </li>
                        </ul>

                        <ul className="madeby">
                            <p>Made By</p>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}