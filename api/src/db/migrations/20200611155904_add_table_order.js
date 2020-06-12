exports.up = async function(knex) {
    await knex.schema.createTable('order', table => {

        table
            .increments('id')
            .unsigned()
            .notNullable()
            .primary(['user_job_pkey']);

        table.float('totalPrice');
        table.string('currency');
        table.boolean('delivered').defaultTo(false);

        table.timestamps(true, true);
    });

    await knex.schema.raw('ALTER TABLE order AUTO_INCREMENT = 1');

};

exports.down = async function(knex) {
  await knex.schema.dropTable('order');
};
