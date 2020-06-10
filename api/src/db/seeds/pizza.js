const seedsDataPath = process.env.SEEDS_DATA_PATH;
const pizzaDataPath = `${seedsDataPath}/pizzas`;
const pizzasData = require(pizzaDataPath);

exports.seed = function(knex) {

  return knex('pizza').del()
    .then(function () {

      return knex('pizza').insert(pizzasData);

    });
};
