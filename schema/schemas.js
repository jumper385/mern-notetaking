const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    date_created: { type: Date, required: true, default: new Date() },
    last_updated: { type: Date, required: true, default: new Date() },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
})

const NoteSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    date_created: { type: Date, required: true, default: new Date() },
    last_updated: { type: Date, required: true, default: new Date() },
    related_room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String }
})

const UserSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_created: { type: Date, required: true, default: new Date() },
    last_updated: { type: Date, required: true, default: new Date() },
    notes_created: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    admin_roles: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
})

module.exports = ({
    RoomSchema: mongoose.model('Room', RoomSchema),
    NoteSchema: mongoose.model('Note', NoteSchema),
    UserSchema: mongoose.model('User', UserSchema),
})