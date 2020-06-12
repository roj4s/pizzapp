const seedsDataPath = process.env.SEEDS_DATA_PATH;
const pizzaDataPath = `${seedsDataPath}/pizzas`;
const pizzasData = require(pizzaDataPath);

exports.seed = async function(knex) {

  await knex('order_pizza').del();
  await knex('pizza').del();
  return await knex('pizza').insert(pizzasData);

}
