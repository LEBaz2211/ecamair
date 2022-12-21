let Voyageur = require('../models/voyageur')

exports.etapeSuivante = (req, res) => {
	req.session.nbseat = req.body.nbseat
	req.session.assurance = req.body.assurance
	res.redirect('/reservation/person')
}

