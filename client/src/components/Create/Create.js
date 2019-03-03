import React, {Component} from 'react';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homeTeam: null,
            awayTeam: null,
            prediction: null,
            odd: null
        };

        this.handleChange = this.props.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Create">
                <form className="form" onSubmit={(event) => this.props.handleCreateSubmit(event, this.state)}>
                    <div className="form__inner">
                        <div className="form__head">
                            <h2 className="form__title">Create Bet</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__controls">
                                <label htmlFor="homeTeam">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" onChange={this.handleChange} id="homeTeam" className="field" name="homeTeam" placeholder="Home Team" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="awayTeam">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" onChange={this.handleChange} id="awayTeam" className="field" name="awayTeam" placeholder="Away Team" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="prediction">
                                    <i className="fas fa-futbol"></i>
                                </label>

                                <input type="text" onChange={this.handleChange} id="prediction" className="field" name="prediction" placeholder="Prediction" required />
                            </div>

                            <div className="form__controls">
                                <label htmlFor="odd">
                                    <i className="fas fa-futbol"></i>
                                </label>

                                <input type="text" onChange={this.handleChange} id="odd" className="field" name="odd" placeholder="Odd" required />
                            </div>
                        </div>

                        <div className="form__actions">
                            <input type="submit" value="Create Bet" name="createBet" className="btn btn--create" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;
