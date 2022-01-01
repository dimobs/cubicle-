const express = require('express');

const homeController = require('./controllers/homeController');
const cubeControler = require('./controllers/cubeControler');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeControler);
router.use('*', (req, res) => {
    res.render('404');
})
module.exports = router;