import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

import bet365 from '../../images/bet365.gif';
import bwin from '../../images/bwin.gif';
import skybet from '../../images/skybet.gif';
import betfair from '../../images/betfair.gif';
import unibet from '../../images/unibet-sport.gif';
import pinnacle from '../../images/pinnacle.gif'

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {
                    this.props.username
                        ?
                        (
                            <div className="shell">
                                <div className="Home">
                                    <section className="section section--about">
                                        <div className="section__head">
                                            <h2 className="section__title">About FootballProTipster</h2>
                                        </div>

                                        <div className="section__body">
                                            <div className="section__entry">
                                                <p>
                                                    Football Predictions is a site that provides its customers with
                                                    specially selected daily predictions about the most popular
                                                    sport in the world. Our football tipsters give advice that
                                                    everyone can increase their profits. Football predictions give
                                                    you the chance to offer bets with high odds and a high rate of
                                                    success achieved with in-depth analysis of each football match.
                                                </p>

                                                <p>As our name suggests, we offer the most popular bets on the
                                                    betting market: x1 or ×2 Betting Tips, Asian Handicap Tips, Over
                                                    and Under Tips, Corner Tips and more football predictions. Enjoy
                                                    the opportunity while watching your favorite game of winning
                                                    with us.
                                                </p>
                                            </div>
                                        </div>

                                        <table className="table-container" width="100%" role="table" aria-label="Destinations">
                                            <caption>Last 5 Predictions</caption>
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
                                                this.props.betsHome
                                                    ?
                                                    this.props.betsHome.map(bets =>
                                                        this.props.username
                                                            ?
                                                            (
                                                                bets.isFinished
                                                                    ?
                                                                    <tr key={bets._id} className="flex-table row" role="rowgroup">
                                                                        <td className="flex-row first" role="cell"><Moment
                                                                            format="DD.MM.YYYY">{bets.date}</Moment></td>
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
                                                    null
                                            }
                                            </tbody>
                                        </table>

                                        <p className="viewAll">View all <Link to="/history">Predictions</Link></p>
                                    </section>

                                    <section className="section section--bookmakers">
                                        <div className="section__head">
                                            <h3 className="section__title">Top Bookmakers</h3>
                                        </div>

                                        <div className="section__body">
                                            <Link target="_blank" to="https://www.bet365.com/#/HO/">
                                                <div className="img-container">
                                                    <img src={bet365} alt="bet365"/>
                                                </div>
                                            </Link>

                                            <Link target="_blank" to="https://sports.bwin.com/bg/sports">
                                                <div className="img-container">
                                                    <img src={bwin} alt="bwin"/>
                                                </div>
                                            </Link>

                                            <Link target="_blank" to="https://m.skybet.com/">
                                                <div className="img-container">
                                                    <img src={skybet} alt="skybet"/>
                                                </div>
                                            </Link>

                                            <Link target="_blank" to="https://www.betfair.com">
                                                <div className="img-container">
                                                    <img src={betfair} alt="betfair"/>
                                                </div>
                                            </Link>

                                            <Link target="_blank" to="https://www.unibet.eu/s">
                                                <div className="img-container">
                                                    <img src={unibet} alt="unibet-sport"/>
                                                </div>
                                            </Link>

                                            <Link target="_blank"
                                                  to="https://www.soprm6502.com/en/?refer=XAFF2626&aup=True">
                                                <div className="img-container">
                                                    <img src={pinnacle} alt="pinnacle"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="intro intro--home">
                                <div className="shell">
                                    <h1 className="intro__title">
                                        Welcome to FootballProtipster
                                    </h1>

                                    <div className="intro__entry">
                                        You like to watch football and want to make money. Sign up in our site and
                                        immerse
                                        yourself in the world of football bets.
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default Home;
