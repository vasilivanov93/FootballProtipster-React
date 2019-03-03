import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from '../Home/Home'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from '../Register/Register';
import Login from '../Login/Login';
import Create from "../Create/Create";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        const localUsername = localStorage.getItem('username');
        const isAdmin = localStorage.getItem('isAdmin') === 'true';

        if (localUsername) {
            this.setState({
                username: localUsername,
                isAdmin: isAdmin
            });
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event, data, isSignup) {
        event.preventDefault();

        fetch('http://localhost:9999/auth/sign' + (isSignup ? 'up' : 'in'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(body => {
                localStorage.setItem('username', body.username);
                localStorage.setItem('isAdmin', body.isAdmin);

                if (body.username) {
                    this.setState({
                        username: body.username,
                        isAdmin: body.isAdmin
                    });

                    toast.success(`Welcome, ${body.username} !`, {
                        closeButton: false,
                        hideProgressBar: true,
                        autoClose: 2000
                    });
                } else {
                    toast.error(`${body.message}`, {
                        closeButton: false,
                        hideProgressBar: true,
                        autoClose: 2000
                    });
                }
            });
    }

    logout() {
        localStorage.removeItem('username');
        this.setState({
            username: null,
            isAdmin: false
        });

        toast.success('Logout successfully!', {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 2000
        });
    }

    render() {
        return (
            <div className="App">
                <ToastContainer />

                <Header
                    isAdmin={this.state.isAdmin}
                    username={this.state.username}
                    logout={this.logout.bind(this)}
                />

                <Switch>
                    <Route exact
                           path="/"
                           render={() =>
                               <Home username={this.state.username} />
                           }
                    />

                    <Route path="/register"
                           render={() =>
                               this.state.username
                                   ?
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
                                   }}/>
                                   :
                                   <Register
                                       handleSubmit={this.handleSubmit.bind(this)}
                                       handleChange={this.handleChange}
                                   />
                           }
                    />

                    <Route path="/login"
                           render={() =>
                               this.state.username
                                   ?
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
                                   }}/>
                                   :
                                   <Login
                                       handleSubmit={this.handleSubmit.bind(this)}
                                       handleChange={this.handleChange}
                                   />
                           }
                    />

                    <Route path="/create"
                           render={() =>
                               this.state.isAdmin
                                   ?
                                   <Create />
                                   :
                                   <Redirect to={{
                                       pathname: '/',
                                       state: { from: this.props.location }
                                   }}/>
                           }
                    />

                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}

export default App;
