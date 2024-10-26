const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");

/* GET programming languages. */
router.get("/", foodController.get);

// /* POST programming language */
router.post("/", foodController.create);

// /* PUT programming language */
// router.put("/:id", userController.update);

// /* DELETE programming language */
// router.delete("/:id", userController.remove);

module.exports = router;
