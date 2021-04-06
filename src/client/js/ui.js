// functions to handle ui changes
function weatherUpdates(data, location) {
    //getting values
    console.log("this is the data ", data, location);
    const description = document.getElementById('weather-description');
    const geolocation = document.getElementById('location');
    const temp = document.getElementById('temp')
    const weatherIcon = document.getElementById('weatherIcon');
    const flag = document.getElementById('flag');
    const intro = document.getElementById('intro');
    const language = document.getElementById('language');
    const currency = document.getElementById('currency');
    const timezone = document.getElementById('timezone');


    //populating ui with data
    description.textContent = `Weather description :${data.data[0].weather.description}`
    geolocation.textContent = `Travel Details for ${location},${data.data[0].country_code}`
    temp.textContent = `Feels like ${data.data[0].temp}`
    weatherIcon.textContent = `Update weather icon later`
    flag.textContent = `Update flag later`
    intro.textContent = `Get ready, you'll be here in X days!`
    language.textContent = `Brush up on your LANGUAGE`
    currency.textContent = `Make sure to bring your CURRENCY`
    timezone.textContent = `Reset your watch ${location}s timezone is TIMEZONE`


}

function pictureUpdate(pictureData) {
    const image = document.getElementById('image');
    image.src = pictureData.hits[0].largeImageURL;
}

export {
    weatherUpdates,
    pictureUpdate
}