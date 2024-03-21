import express from 'express'
import homeController from '../controllers/HomeController.js'

const route = express.Router()

route.get('/', homeController.index)

export default route