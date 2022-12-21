let Voyageur = require('../models/voyageur')
let Reservation = require('../models/reservation')

let connection = require('../database.js')

function getPricing(nbseat, assurance) {
	if (assurance) { return nbseat * 45 + 20 }
	else {return nbseat * 45 }
}

exports.total = (req, res) => {
	let newTotal = getPricing(req.body.nbseat, req.body.assurance)
	res.render('home.ejs', { destination: req.body.destination, nbseat: req.body.nbseat, assurance: req.body.assurance, total: newTotal })
}


exports.validation = (req, res) => {
	let passList = []
	Object.entries(req.body).forEach(([key, value]) => {
		passList.push(value)
	})
	req.session.passList = passList
	res.render('validation.ejs', { nbseat: req.session.nbseat, passList: passList })
	
}

exports.fin = (req, res) => {
	let dest = new Reservation(req.session.destination, req.session.passList)
	connection.query("INSERT INTO voyage set ?", dest, (err, resultSQL) => {
		if (err) console.log(err)
		res.render('confirmation.ejs')
	})
}
