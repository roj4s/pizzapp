const knex = require('../../db');

const repo_get_function = (table_name, query_object={}) => {

  return async () => {

    return await knex(table_name).select()
                    .where(query_object);

  }

}

const route_get_function = (repo, query_object={}) => {


  return async (req, res) => {

    try{

      const objs = await repo.get(query_object);

      if(!objs){
        res.status(500).send();
        return;
      }

      res.status(200).send(objs);
    }
    catch(err){
      console.log(err);
      res.status(500).send();
    }
  }

}

const repo_insert_function = (table_name) => {

  return async (data) => {

    const [obj] = await knex(table_name)
      .insert(data);

    return obj;
  }

}



module.exports = {

  repo_get_function,
  route_get_function,
  repo_insert_function

}
