import { log } from 'console'
import mongoose from "mongoose";


//mongoose.connect('mongodb://denenewton:tigre225@cluster0-shard-00-00.rlqfz.mongodb.net:27017,cluster0-shard-00-01.rlqfz.mongodb.net:27017,cluster0-shard-00-02.rlqfz.mongodb.net:27017/photos?replicaSet=atlas-r2s95k-shard-0&ssl=true&authSource=admin')
mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => log('MongoDb is connected...'))
  .catch(err => log(err))