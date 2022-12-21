let express = require("express")

let router = express.Router()

let reservationController = require('./controllers/reservationController')
let voyageurController = require('./controllers/voyageurController')

//router.get('/', <nom_variable_du controlleur>.<nom de la fonction du controlleur>)

router.get('/', (req, res) => res.redirect('/home'))

router.get('/home', (req, res) => res.render('home.ejs', { destination: "", nbseat: 0, assurance: false, total: 0 }))

router.post('/home' , reservationController.total)

module.exports = router