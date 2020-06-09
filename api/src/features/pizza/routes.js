const router = require('express').Router();
const repo = require('./repository');

router.get('/', async (req, res) => {

  try{
    const {
      id
    } = req.body;

    const pizza_obj = await repo.get(id);

    if(!pizza_obj){
      res.status(500).send();
      return;
    }

    res.status(200).send(pizza_obj);
  }
  catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
