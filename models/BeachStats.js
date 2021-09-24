const mongoose = require('mongoose')

const beachStatsSchema = new mongoose.Schema({
    surfHeight: { type: Number, },
    waterTemp: { type: Number },
    swells: { type: Number },
    temp: { type: Number },
    tide: { type: Number },
    beach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Beach'
    }
})

const BeachStats = mongoose.model('BeachStats', beachStatsSchema)

module.exports = BeachStats;