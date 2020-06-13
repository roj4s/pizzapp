const knex = require('../../db');
const utilsFactory = require('../common/utilsFactory');
const pizzaRepo = require('../pizza/repository');

const table_name = 'order';

const get = async (query_object={}) => utilsFactory.repo_get_function(table_name, query_object)();

const insert = async(data) => {

  const [order] = await knex(table_name)
    .insert({
      totalPrice: data.totalPrice,
      currency: data.currency,
      user: data.user.email,
      address: data.user.address
    });


  if(order){
    const pizzas = data.pizzas;

    for(let i=0; i < pizzas.length; i++){

      const pizza = pizzas[i];
      const orderPizzaId = await knex('order_pizza')
        .insert({
          order: order,
          pizzaName: pizza.pizza.name,
          pizza: pizza.pizza.id,
          unitPrice: pizza.pizza.price,
          quantity: pizza.quantity,
        });

    }

    return order;
  }

  return -1;

}

module.exports = {
  get,
  insert
};
