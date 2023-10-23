import express from "express";
import cors from "cors"
import { DHotel, DPopularHotels } from "./data/hotels.js";
import { DCities, DPopularCities } from "./data/cities.js";
import fetch from 'node-fetch';

let app = express();

app.use(cors(["http://127.0.0.1:5500", "http://127.0.0.1:5501"]))

app.get("/hotels",(req,res)=>{
    res.json(DHotel)
})

app.get("/hotels/popular",(req,res)=>{
    res.json(DPopularHotels)
})

app.get("/popularcities",(req,res)=>{
    res.json(DPopularCities)
})

app.get("/cities",(req,res)=>{
    res.json(DCities)
})

let port = 4000;
app.listen(port, ()=>{
    console.log("Mock server is running in http://localhost:" + port)
})