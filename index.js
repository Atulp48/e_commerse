import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaulData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors'
import bodyParser from "body-parser";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);

app.use(express.static(path.join(__dirname, "./shop/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./shop/build/index.html"));
});

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));
DefaulData();
