const express = require("express");
const router = express.Router();
const planningController = require("../controllers/planning.controller")

router.get("/",planningController.getMatch);

module.exports = router;