const router = require('express').Router()

// importing controllers
const productsController = require('../controllers/productsController') 

// GET
router.get('/products', productsController.get)

// exporting router
module.exports = router