import express from "express"
import mediaController from "../controllers/media.controller.js"

const route = express.Router({ mergeParams: true})

route.get("/search", mediaController.search)

route.get("/genres", mediaController.getGenres)

route.get("/detail/:media", mediaController.getDetail)

route.get("/:mediaCategory", mediaController.getList)

export default Router;