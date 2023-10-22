import express from "express";
import { DHotel, DPopularHotels } from "./data/hotels.js";
import { DCities, DPopularCities } from "./data/cities.js";

let app = express();

app.listen(5501,function(){
    console.log("asdasd")
})
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