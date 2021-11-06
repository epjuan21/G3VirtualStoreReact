const mongoose = require('mongoose');

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.info('Connected to MongoDB Atlas'))
    .catch(err => console.error(err))

module.exports = mongoose;