import express from 'express'
import imagesController from '../controllers/ImagesController.js'

const route = express.Router()

route.get('/', imagesController.index)

export default route