const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const fetch = require('node-fetch');

const app = express()
app.use(express.static('dist'))

// Install cors
const cors = require('cors');
app.use(cors());

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
console.log(__dirname)
//Port
app.listen(2020, function () {
    console.log("Listening on port 2020")
})
module.exports = app;
//Post data
app.post('/post', async(req, res) => {
    const city = req.body.city;
    const coords = await getCoords(city);
    const weather = await getWeather(coords.geonames[0].lng, coords.geonames[0].lat);
    const country = await getCountry(coords.geonames[0].countryCode);
    const imageData = await getImage(city);
    res.send(JSON.stringify({ 
        weatherInfo: weather, 
        image: imageData, 
        country: country,
    }))
});
//get keys
const geonameKey = process.env.geonames;
const weatherbitKey = process.env.weatherbit;
const pixabayKey = process.env.pixabay;
//api calls
async function getCoords(location) {
    const geo = await fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${location}&maxRows=5&lang=en&username=${geonameKey}`);
    return geo.json();
}
async function getWeather(long, lat) {
    const weather = await fetch(`https://api.weatherbit.io/v2.0/current?lon=${long}&lat=${lat}&key=${weatherbitKey}`);
    return weather.json();
}
async function getCountry(countryCode) {
    const country = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
    return country.json();
}
async function getImage(location) {
    const image = await fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${location}&image_type=photo`);
    return image.json();
}