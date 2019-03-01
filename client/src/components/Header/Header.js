import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="shell">
                    <div className="header__inner">
                        <Link to="/" className="logo">
                            <div className="img-container">
                                <img alt="logo" />
                            </div>
                        </Link>

                        <nav className="nav">
                            <ul>
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                {
                                    this.props.username
                                        ?
                                        (
                                            <span>
                                                <li>
                                                    <Link to="#">Welcome {this.props.username}!</Link>
                                                </li>

                                                {
                                                    this.props.isAdmin
                                                        ?
                                                        (<li>
                                                            <NavLink to="/create">Create</NavLink>
                                                        </li>)
                                                        :
                                                        <li>
                                                            <NavLink to="/profile">Profile</NavLink>
                                                        </li>
                                                }

                                                <li>
                                                    <Link to="#" onClick={this.props.logout}>Logout</Link>
                                                </li>
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                <li>
                                                    <NavLink to="/register">Register</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to="/login">Login</NavLink>
                                                </li>
                                            </span>
                                        )
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;