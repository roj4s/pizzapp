const utilsFactory = require('../common/utilsFactory');

const table_name = 'user';
const get = async (query_object={})=> utilsFactory.repo_get_function(table_name, query_object)();
const insert = utilsFactory.repo_insert_function(table_name);

module.exports = {
  get,
  insert
};
