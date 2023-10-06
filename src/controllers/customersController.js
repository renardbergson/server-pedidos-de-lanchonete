const CustomersModel = require('../models/customersModel')

async function login (req, res) {
    const { user, pass } = req.body
    
    const _user = await CustomersModel.find({email: user, password: pass})

    _user ? res.send(_user) : null
}

async function newOrder (req, res) {
    const { userID, id, name } = req.body

    const date = new Date()
    const orderDate = date.toLocaleDateString()
    const orderTime = date.toLocaleTimeString()

    const order = {
        id,
        name,
        orderDate,
        orderTime,
        status: 'Pendente'
    }

    const newOrder = await CustomersModel.updateOne({_id: userID}, {$push: {orders: order}})

    //const cancelOrder = await CustomersModel.updateOne({_id: '650f03f9c7c25360a0f6481e'}, {$pull: {orders: '...'}})

    const response = newOrder ? {"message": "success"} : {"message": "failed"}

    res.send(response)
}

async function updateOrder (req, res) {
    const { user, order, date, time, status } = req.body

    const update = await CustomersModel.updateOne(
        {_id: user, "orders.id": order, "orders.orderDate": date, "orders.orderTime": time},
        {$set: {"orders.$.status": status}}
    )

    const response = update ? {"message": "success"} : {"message": "failed"}

    res.send(response)
}

async function get(req, res) {
    const { id } = req.params

    const obj = id ? {_id: id} : null

    const customers = await CustomersModel.find(obj)

    res.send(customers)
}

async function post(req, res) {
    const { name, email, phone, password } = req.body
    
    const customer = new CustomersModel({name, email, phone, password})

    const save = await customer.save()

    const response = save ? {"message": "customer succesfully sent"} : null
    
    res.send(response)
}

async function del (req, res) {
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id })

    const response = remove ? {"message": "customer succesfully removed"} : null

    res.send(response)
}

module.exports = {
    login,
    newOrder,
    updateOrder,
    get,
    post,
    del
}