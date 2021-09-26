const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/onlysurf'

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected `);
  });

  module.exports = {
      Beach: require('./Beach.js'),
      User: require('./User.js')
  }
