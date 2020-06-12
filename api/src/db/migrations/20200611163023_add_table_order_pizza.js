exports.up = async function(knex) {
    await knex.schema.createTable('order_pizza', table => {
        table
            .increments('id')
            .unsigned()
            .notNullable()
            .primary(['user_job_pkey']);

        table.string('pizzaName', 60).notNullable();

        table.integer('quantity')
            .unsigned();

        table.float('unitPrice');

        table.integer('order')
            .unsigned();

        table.foreign('order')
            .references('id')
            .inTable('order')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table
          .integer('pizza')
          .unsigned();

        table
          .foreign('pizza')
          .references('id')
          .inTable('pizza')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');

        table.timestamps(true, true);

    });

};

exports.down = async function(knex) {

  await knex.schema.dropTable('order_pizza');

};
