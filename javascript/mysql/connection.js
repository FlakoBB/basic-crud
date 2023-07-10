const mysql = require('mysql2')

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PassWord123',
  database: 'basic-crud'
})
