import React, {Component} from 'react';
import Moment from 'react-moment';

class History extends Component {
    render() {
        return (
            <div className="shell">
                <table className="table-container" width="100%" role="table" aria-label="Destinations">
                    <caption>History Predictions</caption>

                    <thead>
                        <tr className="flex-table header" role="rowgroup">
                            <th className="flex-row first" role="columnheader">Date</th>

                            <th className="flex-row" role="columnheader">Home</th>

                            <th className="flex-row" role="columnheader">Match</th>

                            <th className="flex-row" role="columnheader">Away</th>

                            <th className="flex-row" role="columnheader">Prediction</th>

                            <th className="flex-row" role="columnheader">Odd</th>

                            <th className="flex-row" role="columnheader">Result</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.bets.length >= 1
                        ?
                        this.props.bets.map(bets =>
                            this.props.username
                            ?
                            (
                                bets.isFinished
                                ?
                                <tr key={bets._id} className="flex-table row" role="rowgroup">
                                    <td className="flex-row first" role="cell"><Moment format="DD.MM.YYYY">{bets.date}</Moment></td>
                                    <td className="flex-row" role="cell">{bets.homeTeam}</td>

                                    <td className="flex-row" role="cell">{bets.result}</td>

                                    <td className="flex-row" role="cell">{bets.awayTeam}</td>

                                    <td className="flex-row" role="cell">{bets.prediction}</td>

                                    <td className="flex-row" role="cell">{bets.odd}</td>

                                    <td className="flex-row" role="cell">{bets.resultBet}</td>
                                </tr>
                                :
                                null
                            )
                            :
                            null
                        )
                        :
                            (
                                <tr>
                                    <td>No results.</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default History;
