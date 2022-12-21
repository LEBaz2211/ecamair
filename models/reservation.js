let connection = require('../database')

class Reservation {
    constructor(destination, voyageurs) {
        this.destination = destination
        this.voyageurs = voyageurs //liste d'objets voyageur
    }
}

module.exports = Reservation