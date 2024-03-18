import dotenv from 'dotenv'
dotenv.config()

import { log } from 'console'
import mongoose from "mongoose";

mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => log('MongoDb is connected...'))
  .catch(err => log(err))