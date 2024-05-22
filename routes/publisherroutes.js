const publishercontroller = require("../controllers/publishercontroller")

const express = require("express")
const publisherrouter = express.Router()

publisherrouter.post("/checkpublisherlogin",publishercontroller.checkpublisherlogin)
publisherrouter.post("/publishnews",publishercontroller.publishnews)

publisherrouter.put("/updatemynews",publishercontroller.updatemynews)
publisherrouter.delete("/deletemynews/:newsid",publishercontroller.deletemynews)

publisherrouter.get("/viewmynews/:puname",publishercontroller.viewmynews)
publisherrouter.get("/viewmynewstodelete/:newsid",publishercontroller.viewmynewstodelete)

publisherrouter.get("/getavgrating/:newsid",publishercontroller.getavgrating)


module.exports = publisherrouter