import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// module.exports = { app }