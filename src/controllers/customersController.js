const CustomerModel = require('../models/customersModel')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? {_id: id} : null

    const customers = await CustomerModel.find(obj)

    res.send(customers)
}

async function post(req, res) {
    const { name, email, phone, password } = req.body
    
    const customer = new CustomerModel({name, email, phone, password})

    await customer.save()

    const response = {"message": "customer succesfully sent"}
    
    res.send(response)
}

module.exports = {
    get,
    post
}