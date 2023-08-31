// importing products model
const ProductsModel = require('../models/productsModel')

// GET
async function get (req, res) {
    const { id } = req.params

    let obj = id ? {_id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products) 
}

module.exports = {
    get
}