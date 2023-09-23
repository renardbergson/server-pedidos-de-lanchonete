const router = require('express').Router()

// importing controllers
const productsController = require('../controllers/productsController') 
const customersController = require('../controllers/customersController') 

router.post('/customers/login', customersController.login) // login

router.post('/customers/NewOrder', customersController.newOrder) // new order

router.get('/products/:id?', productsController.get) // list products
router.get('/customers/:id?', customersController.get) // list customers

router.post('/products', productsController.post) // new product
router.post('/customers', customersController.post) // new customer

router.delete('/products/:id', productsController.del) // delete product
router.delete('/customers/:id', customersController.del) // delete customer

// exporting router
module.exports = router