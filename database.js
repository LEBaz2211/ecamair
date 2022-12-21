let mysql = require("mysql")


let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'MemyselfandI269',
    database: 'voyage'
})

connection.connect(function (error) { if (error) console.log(error); })

module.exports = connection