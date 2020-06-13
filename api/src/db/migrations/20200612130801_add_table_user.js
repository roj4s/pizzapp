exports.up = async function(knex) {
    await knex.schema.createTable('user', table => {
        table
            .increments('id')
            .unsigned()
            .notNullable()
            .primary(['user_job_pkey']);
        table.string('email', 60).notNullable();
        table.string('name', 60).notNullable();
        table.string('phone', 60).notNullable();
        table.text('address', 'longtext').notNullable;
        table.timestamps(true, true);

        table.unique('email');
    });

};

exports.down = async function(knex) {
  await knex.schema.dropTable('user');
};
