import React, {Component} from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {
                    this.props.username
                        ?
                        null
                        :
                        (<div className="intro intro--home">
                            <div className="shell">
                                <h1 className="intro__title">
                                    Welcome to FootballProtipster
                                </h1>

                                <div className="intro__entry">
                                    You like to watch football and want to make money. Sign up in our site and immerse yourself in the world of football bets.
                                </div>
                            </div>
                        </div>)
                }
            </div>
        )
    }
}

export default Home;
