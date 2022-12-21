//exemple de mod�le de produit avec m�thode get � la base de donn�e

let connection = require('../database')

class Product {
    constructor(id, name, price, description, image) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
    static getAll(callback) {
        connection.query('SELECT * FROM product', function (error, results, fields) {
            if (error) throw error
            callback(results)
        })
    }
}
