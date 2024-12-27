import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";

const routes = express.Router();

routes.use("/user", userRoute);
routes.use("/person", personRoute);
routes.use("/reviews", reviewRoute);
routes.use("/:mediaType", mediaRoute);

export default routes;