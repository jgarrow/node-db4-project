const db = require("../data/dbConfig");

function getRecipes() {
    return db("recipes");
}

// get all ingredient quantities for given recipe
// need ingredient name, quantity and measurement type
function getShoppingList(recipe_id) {
    return db
        .select(
            "ingredients.ingredient_name",
            "recipe_ingredients.quantity",
            "measurements.measurement_name"
        )
        .from("recipe_ingredients")
        .where({ recipe_id })
        .innerJoin("recipes", "recipes.id", "recipe_ingredients.recipe_id")
        .innerJoin(
            "ingredients",
            "ingredients.id",
            "recipe_ingredients.ingredient_id"
        )
        .innerJoin(
            "measurements",
            "measurements.id",
            "recipe_ingredients.measurement_id"
        );
}

function getInstructions(recipe_id) {
    // SQL query
    // select i.instruction, i.step_number
    // from instructions as i
    // join recipes as r
    //     on r.id = i.recipe_id
    // where r.id = 3 -- recipe_id argument instead of `3`
    // order by i.step_number asc

    return db
        .select("instructions.instruction", "instructions.step_number")
        .from("instructions")
        .where({ recipe_id })
        .orderBy("instructions.step_number", "asc")
        .innerJoin("recipes", "recipes.id", "instructions.recipe_id");
}

function getIngredients() {
    return db("ingredients");
}

function getAllRecipesWithSingleIngredient(ingredient_id) {
    // SQL query
    // select i.ingredient_name, r.recipe_name
    // from recipe_ingredients as ri
    // join ingredients as i
    //     on i.id = ri.ingredient_id
    // join recipes as r
    //     on r.id = ri.recipe_id
    // where i.id = 10 -- ingredient_id argument instead of `10`

    // not sure how to select the entire `recipes` table from the bridge `recipe_ingredients` table instead of selecting each individual column
    return db
        .select(
            "recipes.recipe_name",
            "recipes.servings",
            "recipes.total_cook_time_minutes"
        )
        .from("recipe_ingredients")
        .where({ ingredient_id })
        .innerJoin(
            "ingredients",
            "ingredients.id",
            "recipe_ingredients.ingredient_id"
        )
        .innerJoin("recipes", "recipes.id", "recipe_ingredients.recipe_id");
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients,
    getAllRecipesWithSingleIngredient,
};
