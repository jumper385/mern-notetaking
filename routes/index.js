const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to the note-taking app API' })
});

router.post('/signup', (req, res, next) => {
  res.json({ message: 'POST a new profile' })
})

module.exports = router;
