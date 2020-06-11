exports.up = async function(knex) {
    await knex.schema.createTable('pizza', table => {

        table
            .increments('id')
            .unsigned()
            .notNullable()
            .primary(['user_job_pkey']);

        table.string('name', 60).notNullable();
        table.text('description', 'longtext').notNullable();
        table.float('price');
        table.string('currency');
        table.integer('stock');
        table.string('image');

        table.timestamps(true, true);
    });

};

exports.down = async function(knex) {
  await knex.schema.dropTable('pizza');
};
