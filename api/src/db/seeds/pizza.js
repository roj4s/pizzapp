exports.seed = function(knex) {

  return knex('pizza').del()
    .then(function () {

      return knex('pizza').insert([
        {
            name: 'Dummy Pizza 1',
            description: "Just dummy pizza 1",
            price: 10.5,
            currency: 'euros',
            stock: 15,
            image: 'image1'
        },
        {
            name: 'Dummy Pizza 2',
            description: "Just dummy pizza 2",
            price: 15.2,
            currency: 'euros',
            stock: 10,
            image: 'image2'
        },
        {
            name: 'Dummy Pizza 3',
            description: "Just dummy pizza 3",
            price: 22,
            currency: 'euros',
            stock: 3,
            image: 'image3'
        },
      ]);

    });
};
