const foodEater = require("../models/food_eater.js");
const express = require("express");
const router = express.Router();
// get route for getting all foods
router.get("/", (req, res) => {
    foodEater.all("foods");
});
// post route for adding new foods
router.post("/api/foods", function(req, res) {
    foodEater.create(req.body.food_name, "foods");
});
// put route for eating foods
router.put("/api/foods/:id", (req, res) => {
    foodEater.eat(req.body.food_name, "foods");
});
module.exports = router;