const CustomerModel = require('../models/customersModel')

async function login (req, res) {
    const { user, pass } = req.body
    
    const _user = await CustomerModel.find({email: user, password: pass})

    _user ? res.send(_user) : null
}

async function get(req, res) {
    const { id } = req.params

    const obj = id ? {_id: id} : null

    const customers = await CustomerModel.find(obj)

    res.send(customers)
}

async function post(req, res) {
    const { name, email, phone, password } = req.body
    
    const customer = new CustomerModel({name, email, phone, password})

    const save = await customer.save()

    const response = save ? {"message": "customer succesfully sent"} : null
    
    res.send(response)
}

async function del (req, res) {
    const { id } = req.params

    const remove = await CustomerModel.deleteOne({ _id: id })

    const response = remove ? {"message": "customer succesfully removed"} : null

    res.send(response)
}

module.exports = {
    login,
    get,
    post,
    del
}