const router = require('express').Router()

// importing controllers
const productsController = require('../controllers/productsController') 
const customersController = require('../controllers/customersController') 

// GET
router.get('/products/:id?', productsController.get)
router.get('/customers/:id?', customersController.get)

// exporting router
module.exports = router