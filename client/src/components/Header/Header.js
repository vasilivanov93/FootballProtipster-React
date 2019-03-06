import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import './Header.css'
import logo from '../../images/logo.png'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="shell">
                    <div className="header__inner">
                        <Link to="/" className="logo">
                            <div className="img-container">
                                <img src={logo} alt="logo" />
                            </div>
                        </Link>

                        <nav className="nav">
                            <ul>
                                {
                                    this.props.username
                                    ?
                                    (
                                        <li>
                                            <Link to="#">Welcome {this.props.username}!</Link>
                                        </li>
                                    )
                                    :
                                    null
                                }
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                {
                                    this.props.username
                                        ?
                                        (
                                            <span>
                                                {
                                                    this.props.isAdmin
                                                        ?
                                                        (<li>
                                                            <NavLink to="/create">Create</NavLink>
                                                        </li>)
                                                        :
                                                        null
                                                }

                                                <li>
                                                    <NavLink to="/history">History</NavLink>
                                                </li>

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