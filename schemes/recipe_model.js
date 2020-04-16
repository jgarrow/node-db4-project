const db = require('../data/dbConfig');

function getRecipes() {
    return db('recipes');
}

// get all ingredient quantities for given recipe 
// need ingredient name, quantity and measurement type
function getShoppingList(recipe_id) {
    return db
        .select('ingredients.ingredient_name', 'recipe_ingredients.quantity', 'measurements.measurement_name')
        .from('recipe_ingredients')
        .where({ recipe_id })
        .innerJoin("recipes", "recipes.id", "recipe_ingredients.recipe_id")
        .innerJoin("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
        .innerJoin("measurements", "measurements.id", "recipe_ingredients.measurement_id");
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
        .from('instructions')
        .where({ recipe_id })
        .orderBy("instructions.step_number", "asc")
        .innerJoin("recipes", "recipes.id", "instructions.recipe_id")
}

module.exports {
    getRecipes,
    getShoppingList,
    getInstructions
}