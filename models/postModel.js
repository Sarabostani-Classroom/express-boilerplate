const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a post title"]
        },
        image: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;