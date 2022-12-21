let Voyageur = require('../models/voyageur')
let Reservation = require('../models/reservation')

function getPricing(nbseat, assurance) {
	if (assurance) { return nbseat * 45 + 20 }
	else {return nbseat * 45 }
}

exports.total = (req, res) => {
	let newTotal = getPricing(req.body.nbseat, req.body.assurance)
	res.render('home.ejs', { destination: req.body.destination, nbseat: req.body.nbseat, assurance: req.body.assurance, total: newTotal })
}


exports.validation = (req, res) => {
		
}