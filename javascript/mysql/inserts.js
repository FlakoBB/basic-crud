import { connection } from './connection.js'

// ? Insertar Artista
export const insertNewArtist = (name) => {
  connection.connect(err => {
    if (err) {
      console.log('Error:' + err)
      return
    }
    console.log('Conexión exitosa')
  })

  const insertArtist = `INSERT INTO artista (Nombre) VALUES (${name})`
  connection.query(insertArtist, (err,) => {
    if (err) {
      console.log('Error:' + err)
      return
    }
    console.log('nuevo artista agregado')
  })

  connection.end()
}
