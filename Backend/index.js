import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http"
import connectToMongoDB from "./src/db/mongodb.js"
import routes from "./src/routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use("/api/v1", routes);


const port = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(port, () => {
    connectToMongoDB().then(r => {
        console.log("Connected to MongoDB");
    });
    console.log(`Server Running on port ${port}`);
});