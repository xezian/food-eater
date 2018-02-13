const foodEater = require("../models/food_eater.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    foodEater.all("foods");
})

module.exports = router;