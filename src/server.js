const express = require('express')
const app = express()
const cors = require('cors')

// enabling cors
app.use(cors())

// enabling server to receive JSON data
app.use(express.json())

// importing routes file
const routes = require('./routes/routes')

// setting routes
app.use('/', routes)

// importing database
const database = require('./database/database')
database.connect()

// setting port to access the application
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))