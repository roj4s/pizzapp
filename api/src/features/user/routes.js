const router = require('express').Router();
const repo = require('./repository');
const utilsFactory = require('../common/utilsFactory');
const cryptPassword = require('./auth/passwordValidation');
const authRoutes = require('./auth/routes');
const auth = require('./auth/initAuth');

router.get('/:id', async (req, res) => {

  return utilsFactory.route_get_function(repo,
    {"id": parseInt(req.params.id)})(req, res);

});

router.get('/', auth.authenticate, utilsFactory.route_get_function(repo));

router.post('/', async (req, res) => {

    try{
        const passwordData = cryptPassword.encodePassword(req.body.password);
        req.body.salt = passwordData.salt;
        req.body.password = passwordData.password;
        console.log(req.body);

        repo.insert(req.body)
                .then(id => {
                    if(id)
                        res.json({id: id});
                    else
                        res.sendStatus(500);
                }).catch(err => {
                    res.status(500).send(err);
                });

    } catch (err){
        console.error(err);
        res.sendStatus(500);
     }

});

router.use('/auth', authRoutes);


module.exports = router;
