const publishercontroller = require("./controllers/publishercontroller")
const readercontroller = require("./controllers/readercontroller")

const express = require("express")
const router = express.Router()

router.post("/checkpublisherlogin",publishercontroller.checkpublisherlogin)
router.post("/publishnews",publishercontroller.publishnews)
router.get("/viewmynews/:puname",publishercontroller.viewmynews)
router.get("/viewmynewstodelete/:newsid",publishercontroller.viewmynewstodelete)
router.put("/updatemynews",publishercontroller.updatemynews)
router.delete("/deletemynews/:newsid",publishercontroller.deletemynews)
router.get("/getavgrating/:newsid",publishercontroller.getavgrating)


router.post("/checkreaderlogin",readercontroller.checkreaderlogin)
router.post("/insertreader",readercontroller.insertreader)
router.get("/viewnews",readercontroller.viewnews)
router.get("/viewcomments/:newsid",readercontroller.viewcomments)
router.all("/saverating",readercontroller.saverating)

module.exports = router