const router = require('express').Router();
const repo = require('./repository');
const orderRepo = require('../order/repository');
const utilsFactory = require('../common/utilsFactory');
const { authenticate } = require('../user/auth/initAuth');

router.get('/', authenticate, utilsFactory.route_get_function(repo));

router.post('/', authenticate, async(req, res) => {

  try{    

    req.body.user = req.user;
    orderRepo.insert(req.body)
      .then(id=>{
        if(id)
          res.json({id: id});
        else
          res.sendStatus(500);
      })
      .catch(e=>{
        console.error(e);
        res.sendStatus(500);
      });

  }
  catch (err){
    console.error(err);
    res.sendStatus(500);
  }});


module.exports = router;
