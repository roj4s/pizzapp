const router = require('express').Router();
const repo = require('./repository');
const utilsFactory = require('../common/utilsFactory');

router.get('/:id', async (req, res) => {

  return utilsFactory.route_get_function(repo,
    {"id": parseInt(req.params.id)})(req, res);

});

router.get('/', utilsFactory.route_get_function(repo));


module.exports = router;
