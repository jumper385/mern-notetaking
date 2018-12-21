const express = require('express');
const router = express.Router();
const { RoomSchema, NoteSchema, UserSchema } = require('../schema/schemas')

router.get('/', (req, res, next) => {
    res.json({ message: 'GET a user profile' })
})

router.patch('/', (req, res, next) => {
    res.json({ message: 'PATCH a user profile' })
})

module.exports = router;
