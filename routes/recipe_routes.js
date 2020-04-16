const express = require("express");
const RecipeSchemes = require("../schemes/recipe_model");

const router = express.Router();

router.get("/recipes", (req, res) => {
    RecipeSchemes.getRecipes()
        .then((recipes) => res.status(200).send(recipes))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching recipes" })
        );
});

module.exports = router;
