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

router.get("/recipes/:id/shoppingList", (req, res) => {
    const { id } = req.params;

    RecipeSchemes.getShoppingList(id)
        .then((shoppingList) => res.status(200).json(shoppingList))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching shopping list" })
        );
});

router.get("/recipes/:id/instructions", (req, res) => {
    const { id } = req.params;

    RecipeSchemes.getInstructions(id)
        .then((instructions) => res.status(200).json(instructions))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching instructions" })
        );
});

module.exports = router;
