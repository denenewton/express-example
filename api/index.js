import { log } from 'console'
import express from 'express'
import yourName from '../routers/yourName.js'
const app = express()

app.use('/get-your-name', yourName)

const port = process.env.PORT || 3000


app.listen(port,()=> log('Express is running on http://localhost:'+ port))