const router = require('express').Router();
const feedController = require('../controllers/feed');

router.post('/bet/create', feedController.createBet);
router.get('/history', feedController.allPredictions);

module.exports = router;