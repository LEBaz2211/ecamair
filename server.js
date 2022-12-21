let express = require("express")
let session = require('express-session')

let app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

session.nbseat = 0

session.assurance = false

console.log(session)

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

let router = require('./routes.js')
app.use('/', router)

app.listen(80, () => {
    console.log('Server is running on port 80')
})

module.exports = session