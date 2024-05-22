const readercontroller = require("../controllers/readercontroller")

const express = require("express")
const readerrouter = express.Router()

readerrouter.post("/checkreaderlogin",readercontroller.checkreaderlogin)
readerrouter.post("/insertreader",readercontroller.insertreader)
readerrouter.get("/viewnews",readercontroller.viewnews)
readerrouter.post("/addcomment",readercontroller.addcomment)
readerrouter.get("/viewcomments/:newsid",readercontroller.viewcomments)
readerrouter.all("/saverating",readercontroller.saverating)
readerrouter.get("/getmyrating/:nesid/:username",readercontroller.getmyrating)


module.exports = readerrouter