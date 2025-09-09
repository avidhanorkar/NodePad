import express from "express";
import type { Express } from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";

const app: Express = express();
configDotenv();

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log(`Server is up on ${Port}`);
})
connectDB();

app.get("/", (req, res) => {
    res.send(`Trail Route`)
})