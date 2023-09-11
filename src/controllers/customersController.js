const CustomerModel = require('../models/customersModel')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? {_id: id} : null

    const customers = await CustomerModel.find(obj)

    res.send(customers)
}

async function post(req, res) {
    const { name, email, phone, street, number, neighborhood } = req.body

    const customer = new CustomerModel({name, email, phone, street, number, neighborhood})

    await customer.save()
    
    res.send('customer succesfully sent')
}

module.exports = {
    get,
    post
}