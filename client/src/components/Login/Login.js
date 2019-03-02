import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <form className="form">
                    <div className="form__inner">
                        <div className="form__head">
                            <h2 className="form__title">Login</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__controls">
                                <label className="user" htmlFor="username">
                                    <span className="hidden">Username</span>
                                </label>

                                <input type="text" id="username" className="field" name="username"
                                       placeholder="Username" required/>
                            </div>

                            <div className="form__controls">
                                <label className="lock" htmlFor="password"><span
                                    className="hidden">Password</span></label>

                                <input type="password" id="password" className="field" name="password"
                                       placeholder="Password" required/>
                            </div>
                        </div>

                        <div className="form__actions">
                            <input type="submit" value="Login" name="login" className="btn btn--login"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
