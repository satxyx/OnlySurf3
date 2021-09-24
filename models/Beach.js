const mongoose = require('mongoose')

// Schema 
const beachSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    location: { type: String },
    content: { type: String, required: true},
    lat: { type: Number},
    lang: { type: Number },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// Model
const Beach = mongoose.model('Beach', beachSchema)

// Export
module.exports = Beach;