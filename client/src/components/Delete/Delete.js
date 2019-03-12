import React, {Component} from 'react';

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homeTeam: props.bet.homeTeam || '',
            result: props.bet.result || '',
            awayTeam: props.bet.awayTeam ||  '',
            prediction: props.bet.prediction ||'',
            odd: props.bet.odd || '',
            resultBet: props.bet.resultBet || ''
        };
    }

    componentWillReceiveProps(nextProps, prevState) {
        this.setState({
            homeTeam: nextProps.bet.homeTeam,
            result: nextProps.bet.result,
            awayTeam: nextProps.bet.awayTeam,
            prediction: nextProps.bet.prediction,
            odd: nextProps.bet.odd,
            resultBet: nextProps.bet.resultBet,
        })
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
                                       name="homeTeam" placeholder="Home Team" value={this.state.homeTeam}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="result">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="result" className="field"
                                       name="result" placeholder="? - ?" value={this.state.result}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="awayTeam">
                                    <i className="fas fa-user"/>
                                </label>

                                <input type="text" id="awayTeam" className="field"
                                       name="awayTeam" placeholder="Away Team" value={this.state.awayTeam}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="prediction">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="prediction" className="field"
                                       name="prediction" placeholder="Prediction" value={this.state.prediction}
                                       disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="odd">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="odd" className="field" name="odd"
                                       placeholder="Odd" value={this.state.odd} disabled/>
                            </div>

                            <div className="form__controls">
                                <label htmlFor="resultBet">
                                    <i className="fas fa-futbol"/>
                                </label>

                                <input type="text" id="resultBet" className="field"
                                       name="resultBet" placeholder="Win/Lose" value={this.state.resultBet}
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
