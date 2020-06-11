const utilsFactory = require('../common/utilsFactory');

const get = async (query_object={}) => utilsFactory.repo_get_function('pizza', query_object)();


module.exports = {
    get
};
