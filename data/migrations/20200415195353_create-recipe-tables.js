exports.up = function (knex, Promise) {
    return knex.schema
        .createTable("recipes", (tbl) => {
            tbl.increments();
            tbl.text("recipe_name", 128).notNullable();
            tbl.integer("total_cook_time_minutes").unsigned();
            tbl.integer("servings").unsigned();
        })
        .createTable("ingredients", (tbl) => {
            tbl.increments();
            tbl.text("ingredient_name", 32).notNullable();
        })
        .createTable("instructions", (tbl) => {
            tbl.increments();
            tbl.text("instruction").notNullable();
            tbl.integer("step_number").unsigned().notNullable();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes");
        })
        .createTable("measurements", (tbl) => {
            tbl.increments();
            tbl.text("measurement_name", 16).notNullable();
        })
        .createTable("recipe_ingredients", (tbl) => {
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes");
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients");
            tbl.integer("measurement_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("measurements");
            tbl.float("quantity").unsigned().notNullable();
            tbl.primary(["recipe_id", "ingredient_id"]);
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("measurements")
        .dropTableIfExists("instructions")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes");
};
