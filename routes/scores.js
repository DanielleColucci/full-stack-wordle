const router = require('express').Router()
const scoresCtrl = require('../controllers/scores.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*----------------- Public Routes -----------------*/


/*---------------- Protected Routes ---------------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, scoresCtrl.create)
router.get('/:userId', checkAuth, scoresCtrl.userIndex)
router.get('/:userId/:mode', checkAuth, scoresCtrl.modeIndex)

module.exports = router