var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message:'Welcome to the note-taking app API'})
});

module.exports = router;
