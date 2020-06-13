const router = require('express').Router();
const repo = require('./repository');
const orderRepo = require('../order/repository');
const userRepo = require('../user/repository');
const utilsFactory = require('../common/utilsFactory');

router.get('/', utilsFactory.route_get_function(repo));

router.post('/', async(req, res) => {

  try{

    let [user] = await userRepo.get({
      email: req.body.user.email
    });


    if(!user){

      user = await userRepo.insert(req.body.user);

    }

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
