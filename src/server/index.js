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


//Post - GEONAME
async function apiCall(req, res) {
    const URL = "http://api.geonames.org/searchJSON?formatted=true&q=" +(req.body.url)+ "&maxRows=1&lang=en&username=jmccleary&style=full"
    const getScore = await fetch(URL)
    
    const score = await getScore.json()
    console.log("Successfully performed api call!")
    res.send(score)
}
app.post('/apiPost', apiCall)

//Post - weatherbit
/*
async function weatherapiCall(city, countryName, res) {
    const weatherURL = "https://api.weatherbit.io/v2.0/current?city=" +(city)+ "&country=" +(countryName)+ "&key=5921086fa74d4d36a38bc3652d4bfca3"
    const getWeatherScore = await fetch(weatherURL)
    
    const weatherScore = await getWeatherScore.json()
    console.log("Successfully performed api call!")
    res.send(weatherScore)
}
app.post('/apiPost2', weatherapiCall)
*/

//Port
app.listen(2020, function () {
    console.log("Listening on port 2020")
})