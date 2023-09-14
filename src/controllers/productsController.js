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

    const save = await product.save()

    const response = save ? "product succesfully sent" : "some error has ocurred"

    res.send({"message": response})
}

// DELETE
async function del (req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })
    
    const response = remove ? "product succesfully removed" : "some error has ocurred"

    res.send({"message": response})
}

module.exports = {
    get,
    post,
    del
}