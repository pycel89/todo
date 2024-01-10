require('dotenv').config()
const router = require('./routers/index')
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT;
const URL = "mongodb://0.0.0.0:27017/site";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)


mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));


const start = async () => {
    try {
        app.listen(PORT, () => console.log("порт для запуска " + PORT))
    }
    catch (e) {
        console.log(e);
    }
}


start()
