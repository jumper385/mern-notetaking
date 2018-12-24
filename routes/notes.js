const express = require('express');
const router = express.Router();
const { RoomSchema, NoteSchema, UserSchema } = require('../schema/schemas')
const mongoose = require('mongoose')

const Room = RoomSchema
const Note = NoteSchema
const User = UserSchema

router.get('/', (req,res,next) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(error => res.json(error.message))
})

router.get('/:noteID', (req, res, next) => {
    Note.findOne({_id:req.params.noteID})
        .then(note => res.json(note))
        .catch(error => res.json(error.message))
})

router.delete('/:noteID', (req, res, next) => {
    Note.findOne({_id:req.params.noteID})
        .then(note => {
            if(note) Note.deleteOne({_id:note._id}).then(message => res.json(message).catch(error => res.json(error.message)))
            else res.json({messsage:'cannot delete requested note'})
        })
        .catch(error => res.json(error.message))
})

module.exports = router;
