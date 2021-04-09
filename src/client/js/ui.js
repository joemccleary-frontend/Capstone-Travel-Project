// functions to handle ui changes
function weatherUpdates(data, location, country) {
    //getting values
    const description = document.getElementById('weather-description');
    const geolocation = document.getElementById('location');
    const temp = document.getElementById('temp')
    const weatherIcon = document.getElementById('weatherIcon');
    const flag = document.getElementById('flag');
    const intro = document.getElementById('intro');
    const currency = document.getElementById('currency');
    const timezone = document.getElementById('timezone');
    const language = document.getElementById('language');


    //populating ui with data
    description.textContent = `Weather description :${data.data[0].weather.description}`
    geolocation.textContent = `Travel Details for ${data.data[0].city_name}, ${country.name}`
    temp.textContent = `Feels like ${data.data[0].app_temp}`
    weatherIcon.textContent = `Update weather icon later https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`
    //flag.textContent = `${country.flag}`
    intro.textContent = `Get ready, you'll be here in X days!`
    currency.textContent = `Make sure to bring your ${country.currencies[0].name}'s`
    timezone.textContent = `Reset your watch ${location}s timezone is TIMEZONE`
    language.textContent = `Brush up on your ${country.languages[0].name}`
    //flag image
    const flagimage = document.getElementById('flagimage');
    flagimage.src = `${country.flag}`;
}

function pictureUpdate(pictureData) {
    const image = document.getElementById('image');
    image.src = pictureData.hits[0].largeImageURL;
}

export {
    weatherUpdates,
    pictureUpdate,
}