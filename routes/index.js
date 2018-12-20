var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message:'Welcome to the note-taking app API'})
});

router.post('/signup', (req,res,next) => {
  res.json({message: 'POST a new profile'})
})

module.exports = router;
