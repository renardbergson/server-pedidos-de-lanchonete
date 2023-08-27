const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const response = {
        title: "Welcome",
        response: "the server is running"
    }

    res.send(response)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))