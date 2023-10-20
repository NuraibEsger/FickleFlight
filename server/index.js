import express, { json } from "express";
import cors from "cors";
import { DpopularHotel } from "./data/hotel.js"
// import { DCitiesPlan, DCitiesPopular } from "./data/cities.js"
import fetch from 'node-fetch'
import xml2js from "xml2js"

let app = express();
app.use(cors(["http://127.0.0.1:5500", "http://127.0.0.1:5501"]))

app.get("/popularhotels", (req, res)=>{
    res.json(DpopularHotel)
});