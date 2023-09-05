const CustomerModel = require('../models/customersModel')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? {_id: id} : null

    const customers = await CustomerModel.find(obj)

    res.send(customers)
}

module.exports = {
    get
}