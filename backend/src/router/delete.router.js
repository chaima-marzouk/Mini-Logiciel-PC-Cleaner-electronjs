const express = require('express');
const router = express.Router();
const vide = require('../controllers/delete.controller');

router.get('/delete', vide.vide )

module.exports = router;