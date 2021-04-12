export async function handleSubmit(event) {
    event.preventDefault()

    const city = document.getElementById('city').value;
    const out = document.getElementById('Departure').value;
    console.log(out, "OUT")

    const data = await getWeatherInfo(city);

    const weatherData = data.weatherInfo;
    const picture = data.picture;
    const country = data.country;
    Client.weatherUpdates(weatherData, country);
    Client.pictureUpdate(picture);
    Client.updateDate();
    console.log("data:",data)
}
async function getWeatherInfo(city) {
    const postData = await fetch('http://localhost:2020/post', {
        method: 'Post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: city
        })
    });
    return postData.json();
}