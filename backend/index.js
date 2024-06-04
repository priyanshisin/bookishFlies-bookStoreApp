import express from 'express'
import mongoose from 'mongoose'
import bookRoute from './route/book_route.js'
import userRoute from './route/user_route.js'
import msgRoute from './route/msg_route.js'
import cors from "cors"

import { config } from 'dotenv'
config()

const app = express()
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000
const mongo_uri = process.env.MONGODBURI

// connect to mongodb
try {
    mongoose.connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error :",error)
}

// defining routes 
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/msg",msgRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})