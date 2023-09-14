const router = require('express').Router()

// importing controllers
const productsController = require('../controllers/productsController') 
const customersController = require('../controllers/customersController') 

// GET
router.get('/products/:id?', productsController.get)
router.get('/customers/:id?', customersController.get)

// POST
router.post('/products', productsController.post)
router.post('/customers', customersController.post)

// DELETE
router.delete('/products/:id', productsController.del)
router.delete('/customers/:id', customersController.del)

// exporting router
module.exports = router