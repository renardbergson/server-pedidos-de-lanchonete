const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
})

const Model = mongoose.model('customers', schema)

module.exports = Model