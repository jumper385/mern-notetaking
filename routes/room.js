const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ message: 'GET all rooms..' })
})

router.post('/', (req, res, next) => {
  res.json({ message: 'POST a new room..' })
})

router.get('/:roomID', (req, res, next) => {
  res.json({ message: `GET room of id '${req.params.roomID}'` })
})

router.patch('/:roomID', (req, res, next) => {
  res.json({ message: `PATCH room of id '${req.params.roomID}'` })
})

router.post('/:roomID', (req, res, next) => {
  res.json({ message: `POST a new note to room of id '${req.params.roomID}'` })
})

router.get('/:roomID/note/:noteID', (req, res, next) => {
  res.json({message: `GET a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'`})
})

router.patch('/:roomID/note/:noteID', (req, res, next) => {
  res.json({message: `PATCH a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'`})
})

router.delete('/:roomID/note/:noteID', (req, res, next) => {
  res.json({message: `DELETE a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'`})
})

module.exports = router;
