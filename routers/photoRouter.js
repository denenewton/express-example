import { Router } from 'express'
import photoController from '../controllers/PhotoController.js'

const route = new Router()

route.post('/', photoController.store)


export default route