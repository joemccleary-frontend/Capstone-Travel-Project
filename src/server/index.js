const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const fetch = require('node-fetch');

const app = express()
app.use(express.static('dist'))
require("babel-polyfill");

// Install cors
const cors = require('cors');
app.use(cors());

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function (res) {
    res.sendFile('dist/index.html')
})
console.log(__dirname)

//Port
app.listen(2020, function () {
    console.log("Listening on port 2020")
})

//get keys
const geonameKey = process.env.geonames;
const weatherbitKey = process.env.weatherbit;
const pixabayKey = process.env.pixabay;
//Post data
app.post('/post', async(req, res) => {
    const coords = await getCoords(req.body.city);
    async function getCoords(location) {
        const geo = await fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${location}&maxRows=5&lang=en&username=${geonameKey}`);
        return geo.json();
    }
    const weather = await getWeather(coords.geonames[0].lng, coords.geonames[0].lat);
    async function getWeather(lon, lat) {
        const weather = await fetch(`https://api.weatherbit.io/v2.0/current?lon=${lon}&lat=${lat}&key=${weatherbitKey}`);
        return weather.json();
    }
    const country = await getCountry(coords.geonames[0].countryCode);
    async function getCountry(countryCode) {
        const country = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
        return country.json();
    }
    const imageData = await getImage(req.body.city);
    async function getImage(location) {
        const image = await fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${location}&image_type=photo`);
        return image.json();
    }
    res.send(JSON.stringify({ 
        weatherInfo: weather,  
        country: country,
        image: imageData,
    }))
});

app.get("/test", function(req, res) {
    res.json({
        status: 200,
    });
});
module.exports = app;
