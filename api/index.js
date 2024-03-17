import { log } from 'console'
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000,()=> log('Express running on port 300'))