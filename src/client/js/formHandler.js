async function handleSubmit(event) {
    event.preventDefault()
    const data = await fetchWeather(document.getElementById('to').value);
    updateUI(data.weatherInfo, data.country, data.image);
    console.log("data:",data);
    document.getElementById("results").classList.remove("invisible2");
    results.scrollIntoView({behavior: "smooth"});
}
async function fetchWeather(city) {
    const post = await fetch('http://localhost:2020/post', {
        method: 'Post',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({city: city})
    });
    return post.json();
}
//Update UI
function updateUI(weather, country, imageData) {
    //weathericon image
    const weathericon = document.getElementById('weather');
    weathericon.src = `./src/client/media/icons/${weather.data[0].weather.icon}.png`

    //weather
    const description = document.getElementById('weather-description');
    description.textContent = `Weather:${weather.data[0].weather.description}`
    
    //location
    const geolocation = document.getElementById('location');
    geolocation.textContent = `Travel Details for ${weather.data[0].city_name}, ${country.name}`
    
    //temperature
    const temp = document.getElementById('temp')
    temp.textContent = `Feels like ${weather.data[0].app_temp}°C`
    
    //language
    const language = document.getElementById('language');
    language.textContent = `Brush up on your ${country.languages[0].name}`
    
    //currency
    const currency = document.getElementById('currency');
    currency.textContent = `Make sure to bring your ${country.currencies[0].name}('s)`
    
    //flag image
    const flagimage = document.getElementById('flagimage');
    flagimage.src = `${country.flag}`;
    
    //updateImage
    const image = document.getElementById('image');
    image.src = imageData.hits[0].largeImageURL;
    
    //updateDate
    const currentDate = document.getElementById('currentDate')
    const date1 = new Date();
    const date2 = new Date(document.getElementById('Departure').value);
    const diffTime = (date2-date1);
    if (diffTime < 0 ) {
        currentDate.textContent = ("Please enter a departure date in the future");
    } 
    else {
        const diffDays = Math.ceil(diffTime / (1000*60*60*24));
        currentDate.textContent = ("Get ready you'll be here in " + diffDays + " days");
    }
    
}

function createInput() {
    document.getElementById("inputPage").classList.remove("invisible");
    inputPage.scrollIntoView({behavior: "smooth"});

}

function reset() {
    document.getElementById("results").classList.add("invisible2");
}

export {
    handleSubmit,
    updateUI,
    createInput,
    reset
}