const router = require('express').Router();
const passport = require('passport');
const { authenticate } = require('./initAuth');

const sendUserData = (req, res) => {
    res.send({ 
        email: req.user.email 
    });
}

router.post('/login',  
            passport.authenticate('local'),
            sendUserData
            );

router.get('/logout', authenticate, (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/loggedIn', authenticate, sendUserData);

module.exports = router;