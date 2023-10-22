const mongoose = require('mongoose')

function connect () {
    // remote connection - mongodb atlas
    const user = 'admin'
    const pass = 'admin'
    const database = 'pedidos-de-lanchonete'

    mongoose.connect(`mongodb+srv://${user}:${pass}@pedidos-de-lanchonete.ya6oudc.mongodb.net/${database}?retryWrites=true&w=majority`)
    
    const db = mongoose.connection
    
    db.once('open', () => {console.log('application connected to database')})
    db.on('error', () => {console.error.bind(console, 'some error has ocurred!')})
}

module.exports = {connect}