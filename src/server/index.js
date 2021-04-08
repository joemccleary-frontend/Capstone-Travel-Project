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

let projectData = {}

app.post('/postLocation', async(req, res) => {
    const location = req.body.location;
    const coordinates = await getLatLong(location);

    projectData.longitude = coordinates.geonames[0].lng;
    projectData.latitude = coordinates.geonames[0].lat;
    projectData.weatherInfo = await getCurrentWeatherInfo(projectData.latitude, projectData.longitude);
    projectData.pictureData = await getPicture(location);
    console.log(coordinates)
    let CC = coordinates.geonames[0].countryCode;
    projectData.country = await getCountry(CC);
    res.send(JSON.stringify({ weatherInfo: projectData.weatherInfo, picture: projectData.pictureData, country: projectData.country}))

});
console.log(process.env.API_KEY)
//calling geoname
async function getLatLong(location) {
    const url = `http://api.geonames.org/searchJSON?formatted=true&q=${location}&maxRows=10&lang=es&username=jmccleary&style=full`;
    const data = await fetch(url);
    return data.json();
}
// calling weatherbit to get curent weatherInfo
async function getCurrentWeatherInfo(lat, long) {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=5921086fa74d4d36a38bc3652d4bfca3`
    const data = await fetch(url);
    return data.json();
}
//getting picture from pixabay
async function getPicture(location) {
    const url = `https://pixabay.com/api/?key=20873600-37a38bfa9e5523a50f7de6b3f&q=${location}&image_type=photo&pretty=true`
    const data = await fetch(url);
    return data.json();
}
//getting country info from countryREST Api
async function getCountry(countryCode) {
//async function getCountry(countryCode) {
    const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
    //const url = `https://restcountries.eu/rest/v2/alpha/GB`;
    const data = await fetch(url);
    return data.json();
}


app.get("/servertest", function(req, res) {
    res.json({
        status: 200,
    });
});

module.exports = app;
