exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("instructions")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("instructions").insert([
                {
                    instruction:
                        "Cream together brown sugar and softened butter",
                    step_number: 1,
                    recipe_id: 1,
                },
                {
                    instruction:
                        "Sift and combine remaining dry ingredients in separate bowl",
                    step_number: 2,
                    recipe_id: 1,
                },
                {
                    instruction:
                        "Add dry ingredients to sugar and butter. Mix well.",
                    step_number: 3,
                    recipe_id: 1,
                },
                {
                    instruction: "Add eggs and vanilla. Mix well.",
                    step_number: 4,
                    recipe_id: 1,
                },
                {
                    instruction: "Stir in chocolate chips until just combined.",
                    step_number: 5,
                    recipe_id: 1,
                },
                {
                    instruction:
                        "Scoop dough onto greased cookie sheet. Bake at 350 for 12-15 minutes, or until golden brown",
                    step_number: 6,
                    recipe_id: 1,
                },

                {
                    instruction:
                        "Heat olive oil in pan over medium heat. Saute minced garlic and crushed red pepper flakes.",
                    step_number: 1,
                    recipe_id: 2,
                },
                {
                    instruction:
                        "Meanwhile, boil pasta in salted water in separate pot.",
                    step_number: 2,
                    recipe_id: 2,
                },
                {
                    instruction:
                        "Dice roma tomatoes and add to garlic and crushed red pepper flakes, reducing heat to low. Cook for about 3-5 minutes or until tomatoes reach desired firmness.",
                    step_number: 3,
                    recipe_id: 2,
                },
                {
                    instruction:
                        "When pasta is done cooking, strain and mix with tomato mixture and parsley.",
                    step_number: 4,
                    recipe_id: 2,
                },
                {
                    instruction: "Top with parmesan cheese and serve warm",
                    step_number: 5,
                    recipe_id: 2,
                },

                {
                    instruction:
                        "Heat olive oil in pan over medium heat. Saute minced garlic and minced red onion until garlic is fragrant and onion is almost translucent.",
                    step_number: 1,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "Meanwhile, boil pasta in salted water in separate pot.",
                    step_number: 2,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "Dice bell peppers and add to garlic and onions.",
                    step_number: 3,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "Slice chicken to desired size and add to pan with peppers, sprinkling with chicken seasoning.",
                    step_number: 4,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "When chicken is done cooking, remove from heat and add spinach.",
                    step_number: 5,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "When pasta is done cooking, reserve 1 cup of pasta water and strain remaining water from pasta.",
                    step_number: 6,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "Combine chicken and pepper mixture with pasta in a large bowl, adding more spinach as desired.",
                    step_number: 7,
                    recipe_id: 3,
                },
                {
                    instruction:
                        "Stir in parmesan cheese and reserved pasta water until desired consistency is reached.",
                    step_number: 8,
                    recipe_id: 3,
                },

                {
                    instruction: "Boil green beans and chop in food processor.",
                    step_number: 1,
                    recipe_id: 4,
                },
                {
                    instruction: "Mix together pork and soy sauce.",
                    step_number: 2,
                    recipe_id: 4,
                },
                {
                    instruction: "Stir in minced ginger until well combined.",
                    step_number: 3,
                    recipe_id: 4,
                },
                {
                    instruction: "Add chopped green onion, stirring well.",
                    step_number: 4,
                    recipe_id: 4,
                },
                {
                    instruction: "Add sesame oil and sea salt, mixing well.",
                    step_number: 5,
                    recipe_id: 4,
                },
                {
                    instruction:
                        "Add a little bit of water, stirring continuously, until desired consistency is reached.",
                    step_number: 6,
                    recipe_id: 4,
                },
                {
                    instruction: "Add green beans to pork, stirring well.",
                    step_number: 7,
                    recipe_id: 4,
                },
                {
                    instruction:
                        "Scoop into wonton/dumpling wrappers and cook with desired method.",
                    step_number: 8,
                    recipe_id: 4,
                },
            ]);
        });
};
