const Bet = require('../models/Bet');

module.exports = {
    createBet: (req, res) => {
        const betObj = req.body;

        Bet.create(betObj)
            .then((bet) => {
                res.status(200)
                    .json({
                        message: 'Bet created successfully!',
                        bet
                    });
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    allPredictions: (req, res) => {
        Bet.find()
            .then((bets) => {
                res
                    .status(200)
                    .json({message: 'Loading predictions history.', bets});
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    }
};