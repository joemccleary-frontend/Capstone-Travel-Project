const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()
app.use(express.static('dist'))

// Install cors
const cors = require('cors');
app.use(cors());

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/apiPost', async function(req, res) {
    //userInput = req.body.url;
    const apiURL = "https://api.meaningcloud.com/sentiment-2.1?key=" +(process.env.API_KEY)+ "&url=" +(req.body.url)+ "&lang=en"

    const getScore = await fetch(apiURL)
    const score = await getScore.json()

    console.log("Successfully completed")
    res.send(score)
})

// designates what port the app will listen to for incoming requests
app.listen(2020, function () {
    console.log('Example app listening on port 2020!')
})