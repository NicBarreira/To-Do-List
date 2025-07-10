const mysql = require('mysql2/promise');

async function getConnection() {
      return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Filho-02',
    database: 'tasks_diarias'
})
}

module.exports = { getConnection };

