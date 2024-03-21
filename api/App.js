import express, { json, urlencoded } from 'express'
import photoRouter from '../routers/photoRouter.js'
import homeRouter from '../routers/homeRouter.js'
import yourName from '../routers/yourName.js'
import { resolve } from 'path'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }


  middlewares() {
    this.app.use(urlencoded({ extended: true }))
    this.app.use(json())
    this.app.use(express.static(resolve(import.meta.dirname, '..', 'public')))
  }

  routes() {
    this.app.use('/home', homeRouter)
    this.app.use('/photos', photoRouter)
    this.app.use('/get-your-name', yourName)
  }
}

export default new App().app