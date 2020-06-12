const router = require('express').Router();
const repo = require('./repository');
const orderRepo = require('../order/repository');
const utilsFactory = require('../common/utilsFactory');

router.get('/', utilsFactory.route_get_function(repo));

router.post('/', async(req, res) => {

  try{

    orderRepo.insert(req.body)
      .then(id=>{
        if(id)
          res.json({id: id});
        else
          res.sendStatus(500).send("ORDER_NOT_INSERTED");
      })
      .catch(e=>{
        res.sendStatus(500).send(e)
      });

  }
  catch (err){
    res.sendStatus(500).send(err);
  }});


module.exports = router;
