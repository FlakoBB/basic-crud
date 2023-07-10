const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PassWord123',
  database: 'basic-crud'
})

connection.connect(err => {
  if (err) {
    console.log('Error:' + err)
    return
  }
  console.log('conexion exitosa')
})

connection.query('SELECT * FROM artistas', (err, rows) => {
  if (err) {
    console.log('Error:' + err)
    return
  }
  console.log(rows)
})

connection.end()
