const express = require("express");
const router = express.Router();

//
const vide  = require("../controllers/delete.controller");
const analyse= require("../controllers/analyse.controller");

// analyse
router.route("/analyse").post(analyse.analyse);

// clean
router.route("/").get(vide.vide);

module.exports = router;