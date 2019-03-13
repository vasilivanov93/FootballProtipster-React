import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import ToggleButton from '../SideNavigation/ToggleButton';
import './Header.css';
import logo from '../../images/logo.png';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="shell">
                    <div className="header__inner">
                        <div className="navigation__toggle-button">
                            < ToggleButton click={this.props.toggleClickHandler}/>
                        </div>

                        <Link to="/" className="logo">
                            <div className="img-container">
                                <img src={logo} alt="logo" />
                            </div>
                        </Link>

                        {
                            this.props.username
                            ?
                            (
                                <p>Welcome {this.props.username}!</p>
                            )
                            :
                            null
                        }

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