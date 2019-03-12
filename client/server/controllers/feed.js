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
            .sort({date: 'descending'})
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
    },
    lastFivePredictions: (req, res) => {
        Bet.find({isFinished: true})
            .sort({date: 'descending'})
            .limit(5)
            .then((betsHome) => {
                res
                    .status(200)
                    .json({message: 'Loading predictions history.', betsHome});
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    deleteBet: (req, res) => {
        let betId = req.params.id;

        Bet.findByIdAndRemove(betId)
            .then(() => {
                res
                    .status(200)
                    .json({message: 'Bet deleted successfully.'});
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    editGetBet: (req, res) => {
        let betId = req.params.id;
        Bet.findById(betId)
            .then((bet) => {
                res
                    .status(200)
                    .json({message: 'Loading bet for Edit or Remove.', bet});
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    editBet: (req, res) => {
        let editId = req.params.id;
        let betBody = req.body;

        Bet.findById(editId)
            .then((bet) => {
                bet.result = betBody.result;
                bet.resultBet = betBody.resultBet;
                bet.isFinished = true;

                res.status(200)
                    .json({
                        message: 'Bet edited successfully!',
                        bet
                    });

                return bet.save();
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    }
};