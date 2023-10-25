const express = require('express')
const Cors = require('cors')
const bodyParser = require('body-parser');
const UserRouter = require('./Routes/route.user')
const app = express();

app.use(Cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// router 
app.use('/User', UserRouter)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Views/index.html')
})


app.use((req, res) => {
    res.status(404).json({
        message: "router not found"
    })
})




module.exports = app;




