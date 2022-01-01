const express = require('express');

const cubeControler = require('./controllers/cubeControler');
const homeController = require('./controllers/homeController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeControler)

module.exports = router;