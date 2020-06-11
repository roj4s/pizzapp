const router = require('express').Router();
const fs = require('fs');

const IMAGES_PATH = process.env.IMAGES_PATH;

router.get('/:image', async (req, res) => {

  try{

      const imagePath = `${IMAGES_PATH}/${req.params.image}`;

      if(fs.existsSync(imagePath))
      {
        res.sendFile(imagePath);
      }
      else{
          res.status(404).send();
      }
  }
  catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
