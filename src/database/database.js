const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb://localhost:27017/pedidos-de-lanchonete')
    const db = mongoose.connection
    db.once('open', () => {console.log('application connected to database')})
    db.on('error', () => {console.error.bind(console, 'some error has ocurred!')})
}

module.exports = {connect}