export function createInput() {
    document.getElementById("inputPage").classList.remove("invisible");
    inputPage.scrollIntoView({behavior: "smooth"});
}

export async function handleSubmit(event) {
    event.preventDefault()
    const data = await fetchWeather(document.querySelector('#to').value);
    async function fetchWeather(city) {
        const post = await fetch('./post', {
            method: 'Post',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({city: city})
        });
        return post.json();
    }
    updateUI(data.weatherInfo, data.country, data.image);
    console.log("data:",data);
    document.getElementById("results").classList.remove("invisible2");
    results.scrollIntoView({behavior: "smooth"});
}
//Update UI
export function updateUI(weather, country, imageData) {
    //location on card
    document.querySelector('#locationCard').textContent = `${weather.data[0].city_name}`

    //weathericon image
    document.querySelector('#weather').src = `../assets/images/${weather.data[0].weather.icon}.png`

    //weather
    document.querySelector('#weather-description').textContent = `${weather.data[0].weather.description}`
    
    //location
    document.querySelector('#location').textContent = `Travel Details for ${weather.data[0].city_name}, ${country.name}`
    
    //temperature
    document.querySelector('#temp').textContent = `Feels like ${weather.data[0].app_temp}°C`
    
    //language
    document.querySelector('#language').textContent = `Brush up on your ${country.languages[0].name}`
    
    //currency
    document.querySelector('#currency').textContent = `Bring your ${country.currencies[0].name}('s)`

    //flag image
    document.querySelector('#flagimage').src = `${country.flag}`;

    //updateImage
    document.querySelector('#Postcardimage').src = imageData.hits[0].largeImageURL;

    
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

export function reset() {
    document.getElementById("results").classList.add("invisible2");
}