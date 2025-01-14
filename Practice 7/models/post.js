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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
});

module.exports = mongoose.model('post', postSchema);