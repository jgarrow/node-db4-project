exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("measurements")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("measurements").insert([
                { measurement_name: "cup" },
                { measurement_name: "Tablespoon" },
                { measurement_name: "teaspoon" },
                { measurement_name: "whole item" },
                { measurement_name: "grams" },
                { measurement_name: "pounds" },
            ]);
        });
};
