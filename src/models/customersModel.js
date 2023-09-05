const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    street: String,
    number: String,
    neighborhood: String
})

const Model = mongoose.model('customers', schema)

module.exports = Model