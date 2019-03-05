import React, {Component} from 'react';
import Moment from 'react-moment';

import './History.css';
import {Link} from "react-router-dom";

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
                        {
                            this.props.isAdmin
                                ?
                                <th className="flex-row" role="columnheader">Actions</th>
                                :
                                null
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.bets
                        ?
                        this.props.bets.map(bets =>
                            this.props.username
                                ?
                                (
                                    <tr key={bets._id} className="flex-table row" role="rowgroup">
                                        <td className="flex-row first" role="cell"><Moment
                                            format="DD.MM.YYYY">{bets.date}</Moment></td>
                                        <td className="flex-row" role="cell">{bets.homeTeam}</td>

                                        <td className="flex-row" role="cell">{bets.result}</td>

                                        <td className="flex-row" role="cell">{bets.awayTeam}</td>

                                        <td className="flex-row" role="cell">{bets.prediction}</td>

                                        <td className="flex-row" role="cell">{bets.odd}</td>

                                        <td className="flex-row" role="cell">{bets.resultBet}</td>
                                        {
                                            this.props.isAdmin
                                                ?
                                                <td className="flex-row" role="cell">
                                                    <Link to={`/edit/${bets._id}`} onClick={() => this.props.handleEdit(bets._id)}>Edit</Link>

                                                    <Link to="#" onClick={() => this.props.handleRemove(bets._id)}>Delete</Link>
                                                </td>
                                                :
                                                null
                                        }

                                    </tr>
                                )
                                :
                                null
                        )
                        :
                        (<h1>Not bets in DB.</h1>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default History;
