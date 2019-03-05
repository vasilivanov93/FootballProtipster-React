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
    },
    deleteBet: (req, res) => {
        let betId = req.params.id;

        Bet.findByIdAndRemove(betId)
            .then(() => {
                res
                    .status(200)
                    .json({message: 'Bet deleted successfully.'});
            }).catch((err) => {
            console.log(err);
        });
    },
    editGetBet: (req, res) => {
        let betId = req.params.id;
        Bet.findById(betId).then((bet) => {
            res
                .status(200)
                .json({message: 'Loading bet for edit.', bet});
        }).catch((err) => {
            console.log(err);
        });
    },
    editBet: async (req, res) => {
        let editId = req.params.id;
        let betBody = req.body;

        let bet = await Bet.findById(editId);

        try {
            bet.result = betBody.result;
            bet.resultBet = betBody.resultBet;
            bet.isFinished = true;

            bet.save();
        } catch (err) {
            console.log(err);
        }
    }
};