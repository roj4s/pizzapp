exports.up = async function(knex) {

  await knex.schema.table('order', (table) => {
        table.string('user', 60);

        table.foreign('user')
            .references('email')
            .inTable('user')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
  });

};

exports.down = async function(knex) {

  await knex.schema.table('order', (table) => {
            table.dropColumn('user');
  });

};
