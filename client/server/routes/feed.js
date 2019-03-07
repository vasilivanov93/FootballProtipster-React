const router = require('express').Router();
const feedController = require('../controllers/feed');

router.get('/home', feedController.lastFivePredictions);

router.post('/bet/create', feedController.createBet);
router.get('/history', feedController.allPredictions);

router.post('/bet/delete/:id', feedController.deleteBet);

router.get('/bet/edit/:id', feedController.editGetBet);
router.post('/bet/edit/:id', feedController.editBet);

module.exports = router;