import express, { json, urlencoded } from 'express'
import photoRouter from '../routers/photoRouter.js'
import yourName from '../routers/yourName.js'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }


  middlewares() {
    this.app.use(urlencoded({ extended: true }))
    this.app.use(json())
  }

  routes() {
    this.app.use('/photos', photoRouter)
    this.app.use('/get-your-name', yourName)
  }
}

export default new App().app