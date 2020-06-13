exports.up = async function(knex) {

  await knex.schema.table('order', (table) => {

        table.text('address', 'longtext');

  });
};

exports.down = async function(knex) {

  await knex.schema.table('order', (table) => {
            table.dropColumn('address');
  });

};
