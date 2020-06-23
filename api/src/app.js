const express = require('express');
const session = require('express-session');

const indexRouter = require('./routes/index');
const initAuth = require('./features/user/auth/initAuth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false  }));

app.use((req, res, next) => {
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
            'Access-Control-Allow-Headers',
            'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );
      next();

});

app.use(session({ secret: "any_random_secret" }));
initAuth.init(app);

app.use('/', indexRouter);

module.exports = app;
