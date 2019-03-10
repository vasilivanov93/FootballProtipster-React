import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";

import bet365 from '../../images/bet365.gif';
import skybet from '../../images/skybet.gif';
import betfair from '../../images/betfair.gif';
import unibet from '../../images/unibet-sport.gif';
import pinnacle from '../../images/pinnacle.gif'
import daily from '../../images/daily.png';

import championsLeague from '../../images/champions-league.png';
import leagueEuropa from '../../images/uefa-europa-league.png';
import premierLeague from '../../images/premier-league.png';
import serieA from '../../images/serieA.png'
import bundesLeague from '../../images/bundes-liga.png';
import primeraDivision from '../../images/primera-division.png'
import leagueOne from '../../images/ligue-1.png';
import leaguePortugal from '../../images/liga-portugal.png';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {
                    this.props.username
                        ?
                        (
                            <div className="Home">
                                <div className="shell">
                                    <div className="home__inner">
                                        <section className="section section--about">
                                            <div className="section__head">
                                                <h2 className="section__title">About Football ProTipster</h2>
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

                                                <div className="section__entry">
                                                    <h2 className="daily__title">Daily Predictions</h2>
                                                    {
                                                        this.props.bets.map(bets =>
                                                            (
                                                                !bets.isFinished
                                                                    ?
                                                                    <div key={bets._id} className="dailyPrediction">
                                                                        <div className="homeTeam">
                                                                            <h4 className="name">{bets.homeTeam}</h4>

                                                                            <div className="img-container">
                                                                                <img src={daily} alt="dailyPrediction"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="prediction">
                                                                            <p className="result">{bets.result}</p>
                                                                            <p className="prediction">Prediction: {bets.prediction}</p>
                                                                            <p className="odd">Odd: {bets.odd}</p>
                                                                        </div>

                                                                        <div className="awayTeam">
                                                                            <h4 className="name">{bets.awayTeam}</h4>

                                                                            <div className="img-container">
                                                                                <img src={daily} alt="dailyPrediction"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    null
                                                            )
                                                        )
                                                    }
                                                </div>

                                                <div className="section__entry">
                                                    <table className="table-container" width="100%" role="table"
                                                           aria-label="Destinations">
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
                                                                                <tr key={bets._id}
                                                                                    className="flex-table row"
                                                                                    role="rowgroup">
                                                                                    <td className="flex-row first"
                                                                                        role="cell"><Moment
                                                                                        format="DD.MM.YYYY">{bets.date}</Moment>
                                                                                    </td>
                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.homeTeam}</td>

                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.result}</td>

                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.awayTeam}</td>

                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.prediction}</td>

                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.odd}</td>

                                                                                    <td className="flex-row"
                                                                                        role="cell">{bets.resultBet}</td>
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

                                                    <p className="viewAll">View all <Link
                                                        to="/history">Predictions</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="section section--bookmakers">
                                            <div className="section__head">
                                                <h3 className="section__title">Top Bookmakers</h3>
                                            </div>

                                            <div className="section__body">
                                                <a target="_blank" rel="noopener noreferrer" href="https://www.bet365.com/#/HO/">
                                                    <div className="img-container">
                                                        <img src={bet365} alt="bet365"/>
                                                    </div>
                                                </a>

                                                <a target="_blank" rel="noopener noreferrer" href="https://www.betfair.com">
                                                    <div className="img-container">
                                                        <img src={betfair} alt="betfair"/>
                                                    </div>
                                                </a>

                                                <a target="_blank" rel="noopener noreferrer" href="https://m.skybet.com/">
                                                    <div className="img-container">
                                                        <img src={skybet} alt="skybet"/>
                                                    </div>
                                                </a>

                                                <a target="_blank" rel="noopener noreferrer" href="https://www.unibet.eu/s">
                                                    <div className="img-container">
                                                        <img src={unibet} alt="unibet-sport"/>
                                                    </div>
                                                </a>

                                                <a target="_blank" rel="noopener noreferrer" href="https://www.soprm6502.com/en/?refer=XAFF2626&aup=True">
                                                    <div className="img-container">
                                                        <img src={pinnacle} alt="pinnacle"/>
                                                    </div>
                                                </a>
                                            </div>
                                        </section>

                                        <section className="section section--divisions">
                                            <div className="section__head">
                                                <h2 className="section__title">The most popular Football Divisions:</h2>
                                            </div>

                                            <div className="section__entry">
                                                <div className="grid">
                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={premierLeague} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={leagueEuropa} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={championsLeague} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={serieA} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={bundesLeague} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={primeraDivision} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={leagueOne} alt="championsLeague"/>
                                                        </div>
                                                    </div>

                                                    <div className="division">
                                                        <div className="img-container">
                                                            <img src={leaguePortugal} alt="championsLeague"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="intro intro--home">
                                <div className="shell">
                                    <div className="intro__inner">
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
                            </div>
                        )
                }
            </div>
        )
    }
}

export default Home;
