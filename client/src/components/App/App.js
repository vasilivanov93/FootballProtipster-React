import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from '../Home/Home'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null
        };
    }

    render() {
        return (
            <div className="App">
                <Header />

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
                                   <Register />
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
                                   <Login />
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
