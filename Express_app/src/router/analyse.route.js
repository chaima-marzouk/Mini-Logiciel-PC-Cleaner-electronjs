const express = require('express');
const router = express.Router();
const analyse = require('../controllers/analyse')
// import {analyse} from ('../controllers/analyse')


router.get('/analyse', analyse.getFileSizee)


module.exports = router ;