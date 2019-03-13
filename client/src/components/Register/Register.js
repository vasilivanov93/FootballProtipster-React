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
                                <label htmlFor="username">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" onChange={this.handleChange} id="username" className="field" name="username" placeholder="Username" autoComplete="off" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="email">
                                    <i className="fas fa-envelope"/>
                                </label>

                                <input type="email" onChange={this.handleChange} id="email" className="field" name="email" placeholder="Email" autoComplete="off" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="password">
                                    <i className="fas fa-lock"/>
                                </label>

                                <input type="password" onChange={this.handleChange} id="password" className="field" name="password" placeholder="Password" autoComplete="off" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="repeatPassword">
                                    <i className="fas fa-lock"/>
                                </label>

                                <input type="password" onChange={this.handleChange} id="repeatPassword" className="field" name="repeatPassword" placeholder="Repeat Password" autoComplete="off" required />
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
