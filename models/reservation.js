let connection = require('../database')

class Reservation {
    constructor(destination, voyageurs) {
        this.destination = destination
        this.voyageurs = voyageurs //liste d'objets voyageur
        this.assurance = false
    }
}

module.exports = Reservation