exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("ingredients")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("ingredients").insert([
                { ingredient_name: "flour" },
                { ingredient_name: "salt" },
                { ingredient_name: "brown sugar" },
                { ingredient_name: "vanilla extract" },
                { ingredient_name: "eggs" },
                { ingredient_name: "butter" },
                { ingredient_name: "chocolate chips" },
                { ingredient_name: "penne pasta" },
                { ingredient_name: "roma tomatoes" },
                { ingredient_name: "garlic" },
                { ingredient_name: "crushed red pepper flakes" },
                { ingredient_name: "parsley" },
                { ingredient_name: "olive oil" },
                { ingredient_name: "grated parmesan cheese" },
                { ingredient_name: "bowtie pasta" },
                { ingredient_name: "red onion" },
                { ingredient_name: "spinach" },
                { ingredient_name: "red bell pepper" },
                { ingredient_name: "yellow bell pepper" },
                { ingredient_name: "chicken breast" },
                { ingredient_name: "montreal chicken seasoning" },
                { ingredient_name: "ground pork" },
                { ingredient_name: "green beans" },
                { ingredient_name: "soy sauce" },
                { ingredient_name: "sesame oil" },
                { ingredient_name: "ginger root" },
                { ingredient_name: "green onion" },
                { ingredient_name: "sea salt" },
                { ingredient_name: "wonton wrappers" },
            ]);
        });
};
