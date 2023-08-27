const router = require('express').Router()

// importing controllers
const productsController = require('../controllers/productsController') 

// showing the route functions 
router.get('/', productsController.get)


// exporting router
module.exports = router