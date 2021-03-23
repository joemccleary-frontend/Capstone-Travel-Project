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


//Post
async function apiCall(req, res) {
    const URL = "https://api.meaningcloud.com/sentiment-2.1?key=" +(process.env.API_KEY)+ "&url=" +(req.body.url)+ "&lang=en"
    const getScore = await fetch(URL)
    
    const score = await getScore.json()
    console.log("Successfully performed api call!")
    res.send(score)
}
app.post('/apiPost', apiCall)

//Port
app.listen(2020, function () {
    console.log("Listening on port 2020")
})