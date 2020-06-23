exports.up = async function(knex) {

    await knex.schema.table('user', (table) => {
  
          table.text('salt', 'longtext');
  
    });
  };
  
  exports.down = async function(knex) {
  
    await knex.schema.table('user', (table) => {
              table.dropColumn('salt');
    });
  
  };
  