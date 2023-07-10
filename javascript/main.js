import { insertNewArtist } from './mysql/inserts.js'

const artistForm = document.getElementById('artistForm')

artistForm.addEventListener('submit', event => {
  event.preventDefault()
  const newArtist = document.getElementById('artistName')
  console.log(newArtist.value)
})
