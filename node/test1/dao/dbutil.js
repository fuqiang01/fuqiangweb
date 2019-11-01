const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'test'
    });
    return connection;
}


module.exports = createConnection;