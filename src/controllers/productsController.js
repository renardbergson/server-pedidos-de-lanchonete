// home
function get (req, res) {
    const response = {
        title: "Welcome",
        response: "the server is running"
    }

    res.send(response)
}

module.exports = {
    get
}