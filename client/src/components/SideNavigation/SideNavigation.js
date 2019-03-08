import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import './SideNavigation.css'

class SideNavigation extends Component {
    render() {
        let navigationClass = 'side-navigation';
        if (this.props.show) {
            navigationClass = 'side-navigation open'
        }
        return (
            <nav className={navigationClass}>
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
        )
    }
}

export default SideNavigation;