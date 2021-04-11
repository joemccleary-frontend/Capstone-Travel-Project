async function handleSubmit(event) {
    event.preventDefault()

    const location = document.getElementById('city').value;
    const out = document.getElementById('Departure').value;
    console.log(out, "OUTOUTOUT")
    const data = await getWeatherInfo(location);
    const weatherData = data.weatherInfo;
    const picture = data.picture;
    const country = data.country;
    Client.weatherUpdates(weatherData, location, country);
    Client.pictureUpdate(picture);
    Client.updateDate();
    console.log("data",data)
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