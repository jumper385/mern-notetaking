const express = require('express');
const router = express.Router();
const { RoomSchema, NoteSchema, UserSchema } = require('../schema/schemas')
const mongoose = require('mongoose')

const Room = RoomSchema
const Note = NoteSchema
const User = UserSchema

router.get('/', (req, res, next) => {
  Room.find()
    .select('_id name date_created')
    .then(rooms => {
      rooms = rooms.length ? rooms : null
      res.json({ message: 'GET all rooms..', rooms: rooms })
    })
    .catch(error => {
      res.json({ error: error.message })
    })
})

router.post('/', (req, res, next) => {
  const new_room = new Room({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name
  })
  new_room.save()
    .then(message => res.json(message))
    .catch(error => res.json(error.message))
})

router.get('/:roomID', (req, res, next) => {

  Room.findOne({_id:req.params.roomID})
    .then(room => {
      Note.find({related_room:room._id})
        .then(notes => {res.json({room:room,notes:notes})})
        .catch(error => res.json(error.message))
    })
    .catch(error => res.json(error))

})

router.patch('/:roomID', (req, res, next) => {
  Room.findOne({ _id: req.params.roomID })
    .then(original => {
      Room.update({ _id: original._id }, {
        $set: {
          original,
          last_updated: new Date(),
          __v: original.__v + 1,
          ...req.body,
        }
      })
        .then(message => res.json(message))
    })
    .catch(error => res.json(error))
})

router.post('/:roomID', (req, res, next) => {

  Room.findOne({ _id: req.params.roomID })
    .then(room => {

      const new_note = room || room.length ? ( () => {
        const new_note = new Note({
          _id: new mongoose.Types.ObjectId,
          name: req.body.name,
          related_room: room
        })
        return new_note
      }) : null

      console.log(new_note(room))
      
      if(room) new_note(room).save().then(result => res.json(result)).catch(error => res.json(error.message))
      else res.json({message:'room doesnt exist'})

    })
    .catch(error => res.json(error.message))
})

router.get('/:roomID/note/:noteID', (req, res, next) => {
  res.json({ message: `GET a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'` })
})

router.patch('/:roomID/note/:noteID', (req, res, next) => {
  res.json({ message: `PATCH a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'` })
})

router.delete('/:roomID/note/:noteID', (req, res, next) => {
  res.json({ message: `DELETE a note of id '${req.params.noteID}' in the room of id '${req.params.roomID}'` })
})

module.exports = router;
