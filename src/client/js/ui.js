// functions to handle ui changes
function weatherUpdates(data, country) {
    //getting values
    const description = document.getElementById('weather-description');
    const geolocation = document.getElementById('location');
    const temp = document.getElementById('temp')
    const currency = document.getElementById('currency');
    const language = document.getElementById('language');

    //populating ui with data
    description.textContent = `Weather:${data.data[0].weather.description}`
    geolocation.textContent = `Travel Details for ${data.data[0].city_name}, ${country.name}`
    temp.textContent = `Feels like ${data.data[0].app_temp}°C`
    currency.textContent = `Make sure to bring your ${country.currencies[0].name}('s)`
    language.textContent = `Brush up on your ${country.languages[0].name}`
    //flag image
    const flagimage = document.getElementById('flagimage');
    flagimage.src = `${country.flag}`;
    //weathericon image
    const weathericon = document.getElementById('weather');
    weathericon.src = `./src/client/media/icons/${data.data[0].weather.icon}.png`
    
}

function pictureUpdate(pictureData) {
    const image = document.getElementById('image');
    image.src = pictureData.hits[0].largeImageURL;
}
function updateDate() {
    const date1 = new Date();
    const date2 = new Date(document.getElementById('Departure').value);
    const diffTime = Math.abs(date2-date1);
    const diffDays = Math.ceil(diffTime / (1000*60*60*24));
    const currentDate = document.getElementById('currentDate')
    currentDate.textContent = ("Get ready you'll be here in " + diffDays + " days");
}

export {
    weatherUpdates,
    pictureUpdate,
    updateDate
}