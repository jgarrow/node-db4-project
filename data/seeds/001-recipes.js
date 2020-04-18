exports.seed = function (knex) {
    // truncate will reset the primary key each time
    return knex("recipes")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("recipes").insert([
                {
                    recipe_name: "Chocolate Chip Cookies",
                    total_cook_time_minutes: 20,
                    servings: 24,
                },
                {
                    recipe_name: "Pasta all'arrabbiata",
                    total_cook_time_minutes: 20,
                    servings: 4,
                },
                {
                    recipe_name: "Pasta alla primavera",
                    total_cook_time_minutes: 30,
                    servings: 4,
                },
                {
                    recipe_name: "Pork and Green Bean Dumplings",
                    total_cook_time_minutes: 20,
                    servings: 24,
                },
            ]);
        });
};
