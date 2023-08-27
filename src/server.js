const express = require('express')
const app = express()

// importing routes file
const routes = require('./routes/routes')

// setting routes
app.use('/', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))