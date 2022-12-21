let Voyageur = require('../models/voyageur')

exports.etapeSuivante = (req, res) => {
	req.session.nbseat = req.body.nbseat
	req.session.assurance = req.body.assurance
	req.session.destination = req.body.destination
	res.redirect('/reservation/person')
}

