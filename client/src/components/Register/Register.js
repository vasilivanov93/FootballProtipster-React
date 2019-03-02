import React, {Component} from 'react';
import './Register.css';

class Register extends Component {
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
            <div className="Register">
                <form className="form" onSubmit={(event) => this.props.handleSubmit(event, this.state, true)}>
                    <div className="form__inner">
                        <div className="form__head">
                            <h2 className="form__title">Register</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__controls">
                                <label className="user" htmlFor="username">
                                    <span className="hidden">Username</span>
                                </label>

                                <input type="text" onChange={this.handleChange} id="username" className="field" name="username" placeholder="Username" required />
                            </div>

                            <div className="form__controls">
                                <label className="envelope" htmlFor="email"><span className="hidden">Email</span></label>

                                <input type="email" onChange={this.handleChange} id="email" className="field" name="email"
                                       placeholder="Email" required />
                            </div>

                            <div className="form__controls">
                                <label className="lock" htmlFor="password"><span className="hidden">Password</span></label>

                                <input type="password" onChange={this.handleChange} id="password" className="field" name="password"
                                       placeholder="Password" required />
                            </div>

                            <div className="form__controls">
                                <label className="lock" htmlFor="repeatPassword"><span className="hidden">Repeat Password</span></label>

                                <input type="password" onChange={this.handleChange} id="repeatPassword" className="field" name="repeatPassword"
                                       placeholder="Repeat Password" required />
                            </div>
                        </div>

                        <div className="form__actions">
                            <input type="submit" value="Register" name="register" className="btn btn--register" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
