const express = require('express');
const router = express.Router();
const analyse = require('../controllers/analyse')


router.get('/', analyse.analyse)


module.exports = router ;