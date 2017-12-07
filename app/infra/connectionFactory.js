var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'biblioteca_nodejs'
    });
}

module.exports = function () {
    return createDBConnection;
}

