const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
    homeTeam: { type: mongoose.Schema.Types.String, required: true },
    awayTeam: { type: mongoose.Schema.Types.String, required: true },
    result: { type: mongoose.Schema.Types.String, default: '? - ?', required: true },
    prediction: { type: mongoose.Schema.Types.String, required: true },
    odd: { type: mongoose.Schema.Types.String, required: true },
    isFinished: { type: mongoose.Schema.Types.Boolean, default: false, required: true },
    date: {type: mongoose.Schema.Types.Date, default: Date.now, required: true },
    resultBet: { type: mongoose.Schema.Types.String, default: 'n/a', required: true }
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;