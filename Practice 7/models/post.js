const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
});

module.exports = mongoose.model('post', postSchema);