const express = require('express');

const router = express.Router();

const pizzaRoutes = require('../features/pizza/routes');

router.get('/', (req, res) => {

    return res.json({ success: true});

});

router.use('/pizza', pizzaRoutes);

module.exports = router;
