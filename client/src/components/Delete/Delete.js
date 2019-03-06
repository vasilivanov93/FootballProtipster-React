import React, {Component} from 'react';
import './Delete.css';

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homeTeam: this.props.bet.homeTeam,
            result: this.props.bet.result,
            awayTeam: this.props.bet.awayTeam,
            prediction: this.props.bet.prediction,
            odd: this.props.bet.odd,
            resultBet: this.props.bet.resultBet,
        };
    }
    render() {
        return (
            <div className="Edit">
                <form className="form" onSubmit={(event) => this.props.handleRemove(this.props.bet._id, event)}>
                    <div className="form__inner">
                        <div className="form__head">
                            <h2 className="form__title">Delete Bet</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__controls">
                                <label htmlFor="homeTeam">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" id="homeTeam" className="field"
                                       name="homeTeam" placeholder="Home Team" value={this.props.bet.homeTeam}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="result">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="result" className="field"
                                       name="result" placeholder="? - ?" value={this.props.bet.result}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="awayTeam">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" id="awayTeam" className="field"
                                       name="awayTeam" placeholder="Away Team" value={this.props.bet.awayTeam}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="prediction">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="prediction" className="field"
                                       name="prediction" placeholder="Prediction" value={this.props.bet.prediction}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="odd">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="odd" className="field" name="odd"
                                       placeholder="Odd" value={this.props.bet.odd} disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="resultBet">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="resultBet" className="field"
                                       name="resultBet" placeholder="Win/Lose" value={this.props.bet.resultBet}
                                       disabled/>
                            </div>
                        </div>

                        <div className="form__actions">
                            <input type="submit" value="Delete Bet" name="deleteBet" className="btn btn--delete"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Delete;
