import express, { json, urlencoded } from 'express'
import photoRouter from './routers/photoRouter.js'
import yourName from './routers/yourName.js'
import { join } from 'path'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }


  middlewares() {
    this.app.use(urlencoded({ extended: true }))
    this.app.use(json())
    this.app.use(express.static(join('__dirname', 'public')));
  }

  routes() {
    this.app.use('/photos', photoRouter)
    this.app.use('/get-your-name', yourName)
  }
}

export default new App().app