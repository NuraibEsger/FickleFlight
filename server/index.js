import express, { json } from "express";
import cors from "cors";
import { DHotel, DPopularHotels } from "./data/hotels.js"
import { DCitiesPlan, DPopularCities } from "./data/cities.js"
import fetch from 'node-fetch'
import xml2js from "xml2js"



let app = express();
app.use(cors(["http://127.0.0.1:5500", "http://127.0.0.1:5501"]))

app.get("/popularhotels", (req, res) => {
    res.json(DPopularHotels);
})

app.get("/popularcities", (req, res) => {
    res.json(DPopularCities);
})

app.get("/plancities", (req, res) => {
    res.json(DCitiesPlan);
})

app.get("/hotels", (req, res) => {
    res.json(DHotel);
})

app.get("/hotel/:id", (req, res) => {
    let id = Number(req.params.id);
    res.json(DHotel.find(x => x.id === id));
    res.json(DHotel);
})

app.get("/airports", async (req,res)=>{

const url = 'https://timetable-lookup.p.rapidapi.com/airports/GYD/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '673318f3famsh9bad1d78d367b28p1f4d57jsn7d9858af26e5',
    'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
        const xmlData = await response.text();



        xml2js.parseString(xmlData ,(err,result)=>{
            if(err){
                console.log("XML data error:", err)
            }
            else{
                const jsonData = JSON.stringify(result, null, 2)
                res.send(jsonData).status(200);
            }
        })
} catch (error) {
	console.error(error);
}
});




app.get("/flights", async (req, res) => {
    const originAirportCode = req.query.origin; 
    const destinationAirportCode = req.query.destination; 
    const date = req.query.date; 

    const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/${originAirportCode}/${destinationAirportCode}/${date}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85939b333bmsh4a53100b4f76aa1p1669adjsn1ae0093f641f',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const xmlData = await response.text();

        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                console.log("XML data error:", err);
                res.status(500).send("Error processing XML data");
            } else {
                const jsonData = JSON.stringify(result, null, 2);
                res.status(200).send(jsonData);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error making the API request");
    }
});


app.get("/hotelsearch",async (req,res)=>{
const url = 'https://booking-com.p.rapidapi.com/v2/hotels/search?order_by=popularity&adults_number=1&checkin_date=2023-10-27&filter_by_currency=AED&dest_id=-553173&locale=en-gb&checkout_date=2023-11-28&units=metric&room_number=1&dest_type=city&include_adjacency=true&children_number=2&page_number=0&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '85939b333bmsh4a53100b4f76aa1p1669adjsn1ae0093f641f',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    const xmlData = await response.text();
    console.log(xml)

    xml2js.parseString(xmlData, (err, result) => {
        if (err) {
            console.log("XML data error:", err);
            res.status(500).send("Error processing XML data");
        } else {
            const jsonData = JSON.stringify(result, null, 2);
            res.status(200).send(jsonData);
            console.log(result);
        }
    });
} catch (error) {
    console.error(error);
    res.status(500).send("Error making the API request");
}
})

const port = 4000;
app.listen(port, () => {
    console.log("Mock server is running in http://localhost:" + port)
})
