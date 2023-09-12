// importing products model
const ProductsModel = require('../models/productsModel')

// GET
async function get (req, res) {
    const { id } = req.params

    let obj = id ? {_id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products) 
}

// POST
async function post (req, res) {
    const { name, description, price } = req.body

    const product = new ProductsModel({name, description, price})

    await product.save()

    const response = {"message": "product succesfully sent"}

    res.send(response)
}   

module.exports = {
    get,
    post
}