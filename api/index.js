import '../database/mongoConnection.js'
import { log } from 'console'
import app from './App.js'


const port = process.env.PORT || 3000

app.listen(port, () => log('Express is running on http://localhost:' + port))