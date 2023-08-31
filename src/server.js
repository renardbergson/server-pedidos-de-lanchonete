const express = require('express')
const app = express()
const cors = require('cors')

// importing routes file
const routes = require('./routes/routes')

// setting routes
app.use('/', routes)

// importing database
const database = require('./database/database')
database.connect()

// enabling cors
app.use(cors())

// setting port to access the application
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))