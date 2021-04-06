async function handleSubmit(event) {
    event.preventDefault()

    const location = document.getElementById('url').value;
    const data = await getWeatherInfo(location);
    const weatherData = data.weatherInfo;
    const picture = data.picture;
    Client.weatherUpdates(weatherData, location);
    Client.pictureUpdate(picture);
}

async function getWeatherInfo(location) {
    const postData = await fetch("http://localhost:2020/postLocation", {
        method: 'Post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: location
        })
    });
    return postData.json();
}

export { handleSubmit }



        /*/update UI
        .then(function(res) {
            console.log(res)
            document.getElementById('polarity').innerHTML = res.geonames[0].lat;
            document.getElementById("subjectivity").innerHTML = "Country: "+ res.geonames[0].countryName;
            document.getElementById("confidence").innerHTML = "City: "+ res.geonames[0].asciiName;
        })*/
    //    }
    //else {alert("Enter a URL that is valid");}