const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passwordValidation = require('./passwordValidation');

const userRepo = require('../repository');

const init = (app) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' },
         async (email, password, done) => {           
            const [user] = await userRepo.get({email: email});
            
            if (!user) {
                return done(null, false);
            }
            
            if(!passwordValidation.isValid(password, user.salt, user.password)){
                return done(null, false, "Invalid password");
            }

            return done(null, user);
    })
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    const [ user ] = await userRepo.get({id: id});
    if (!user) {
      return done(`Could not deserialize user with id ${id}`);
    }
    
    return done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};

const authenticate = (req, res, next) => {

  if (!req.isAuthenticated())
        res.send(401);
    else
        next();
}

module.exports = {
    init,
    authenticate
};