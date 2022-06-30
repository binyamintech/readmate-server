const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userDetails: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false,
            required: true
        },
        level: {
            type: Number,
            // enum: [7,10]
        },
        classId: {
            type: Number,
            required: true
        },
        permissions: {
            type: String,
            enum: ["admin", "teacher", "viewer"],
            default: "viewer"
        }
    },
    TF: [{
        Value: {
            type: Number,
            required: true
        },
        Date: {
            type: Date,
            default: Date.now
        }
    }],
    TR: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'userTrainReading'
    }],
    assessments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'userTest'
    }],
    calibration: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('user', UserSchema)


