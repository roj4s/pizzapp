const express = require('express');

const router = express.Router();
const features = [
  'pizza',
  'image',
  'order',
  'user'
];

features.forEach(ft=>router.use(`/${ft}`, require(`../features/${ft}/routes`)));

router.get('/', (req, res) => {

    return res.json({ success: true});

});


module.exports = router;
