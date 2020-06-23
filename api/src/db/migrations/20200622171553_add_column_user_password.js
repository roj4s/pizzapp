exports.up = async function(knex) {

    await knex.schema.table('user', (table) => {
  
          table.text('password', 'longtext');
  
    });
  };
  
  exports.down = async function(knex) {
  
    await knex.schema.table('user', (table) => {
              table.dropColumn('password');
    });
  
  };
  