const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const UserTrainReadingSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    srcSound: {}, //????

    answers: [{
        t_type: {
            type: String,
            enum: ["pushup", "level"]
        },
        answers: [{
            orderNum: {
                type: Number
            },
            text: {
                type: String
            }
        }]

    }],

    date: {
        type: Date,
        default: Date.now
    },
    value: {
        type: Number,
        required: true
    }
})

// TODO: import connect, create fake data and check CRUD for this data.
const UserTrainReadingModel = mongoose.model('userTrainReading', UserTrainReadingSchema)
module.exports = UserTrainReadingModel 

