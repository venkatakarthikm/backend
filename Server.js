const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")        // allows resourse sharing between two 
require('dotenv').config();

const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())

const publisherrouter = require("./routes/publisherroutes")
const readerrouter = require("./routes/readerroutes")

app.use("",publisherrouter)
app.use("",readerrouter)

const port = process.env.PORT || 2032
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})