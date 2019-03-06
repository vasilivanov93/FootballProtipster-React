import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from '../Home/Home'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from '../Register/Register';
import Login from '../Login/Login';
import Create from "../Create/Create";
import History from "../History/History";
import './App.css';
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            isAdmin: false,
            bets: [],
            fetchAllPredictions: null,
            bet: [],
            redirectToReferrer: false
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

        this.fetchAllPredictions();
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

    handleCreateSubmit(event, data) {
        event.preventDefault();

        fetch('http://localhost:9999/feed/bet/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(body => {
                this.fetchAllPredictions();

                this.setState({
                    redirectToReferrer: true
                });

                if (!body.errors) {
                    toast.success(body.message, {
                        closeButton: false,
                        hideProgressBar: true,
                        autoClose: 2000
                    });
                }
            });
    }

    fetchAllPredictions() {
        fetch('http://localhost:9999/feed/history')
            .then(response => response.json())
            .then(body => {
                this.setState({
                    bets: body.bets,
                    redirectToReferrer: true
                });
            });
    }

    handleRemove(id, event) {
        event.preventDefault();
        return fetch(`http://localhost:9999/feed/bet/delete/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(body => {
                this.fetchAllPredictions();
                toast.success(body.message, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            })
    }

    handleEdit(id) {
        fetch(`http://localhost:9999/feed/bet/edit/${id}`)
            .then(response => response.json())
            .then(body => {
                this.setState({
                    bet: body.bet
                });

                toast.success(body.message, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            });
    }

    handleEditSubmit(id, event, data) {
        // event.preventDefault();

        return fetch(`http://localhost:9999/feed/bet/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(body => {
                this.fetchAllPredictions();
                this.setState({
                    redirectToReferrer: true
                });

                toast.success(body.message, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });

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
        if (this.state.redirectToReferrer) {
            this.setState({
                redirectToReferrer: false
            });

            return <Redirect to={{
                pathname: '/history',
                state: { from: this.props.location }
            }}/>;
        }

        return (
            <div className="App">
                <ToastContainer/>

                <Header
                    isAdmin={this.state.isAdmin}
                    username={this.state.username}
                    logout={this.logout.bind(this)}
                />

                <Switch>
                    <Route exact
                           path="/"
                           render={() =>
                               <Home username={this.state.username}/>
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
                                   <Create
                                       handleCreateSubmit={this.handleCreateSubmit.bind(this)}
                                       handleChange={this.handleChange}
                                   />
                                   :
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
                                   }}/>
                           }
                    />

                    <Route path="/history"
                           render={() =>
                               this.state.username
                                   ?
                                   <History
                                       username={this.state.username}
                                       isAdmin={this.state.isAdmin}
                                       bets={this.state.bets}
                                       handleEdit={this.handleEdit.bind(this)}
                                   />
                                   :
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
                                   }}/>
                           }
                    />

                    <Route path="/edit"
                           render={() =>
                               this.state.isAdmin
                                   ?
                                   <Edit
                                       bet={this.state.bet}
                                       handleEditSubmit={this.handleEditSubmit.bind(this)}
                                       handleChange={this.handleChange}
                                   />
                                   :
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
                                   }}/>
                           }
                    />

                    <Route path="/delete"
                           render={() =>
                               this.state.isAdmin
                                   ?
                                   <Delete
                                       bet={this.state.bet}
                                       handleRemove={this.handleRemove.bind(this)}
                                   />
                                   :
                                   <Redirect to={{
                                       pathname: '/',
                                       state: {from: this.props.location}
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
