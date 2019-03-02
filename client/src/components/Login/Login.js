import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            email: null
        };

        this.handleChange = this.props.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Login">
                <form className="form" onSubmit={(event) => this.props.handleSubmit(event, this.state, false)}>
                    <div className="form__inner">
                        <div className="form__head">
                            <h2 className="form__title">Login</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__controls">
                                <label className="user" htmlFor="username">
                                    <span className="hidden">Username</span>
                                </label>

                                <input type="text" onChange={this.handleChange} id="username" className="field" name="username"
                                       placeholder="Username" required/>
                            </div>

                            <div className="form__controls">
                                <label className="lock" htmlFor="password"><span
                                    className="hidden">Password</span></label>

                                <input type="password" onChange={this.handleChange} id="password" className="field" name="password"
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
