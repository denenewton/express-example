import express from 'express'
import Photo from '../models/Photo.js'
const route = express.Router()


route.get('/', async (req, res) => {
  try {
    const imagens = await Photo.find().sort('originalname')
    console.log(imagens);
    return res.status(200).json(imagens)
  } catch (error) {
    return res.status(501).json({
      menssage: 'Something goes wrong on the server...'
    })
  }

})

export default route