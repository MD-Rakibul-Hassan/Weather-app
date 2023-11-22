// KEY  = f01ca07d698e4f8561a37a44492e4e51
const cityName = document.getElementById("city");
cityName.addEventListener("input",function () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=f01ca07d698e4f8561a37a44492e4e51`

fetch (URL)
.then ( (response) => {
    return response.json()
})
.then((data) => {
    const showTemp = document.getElementById("showTemp");
    let localTemp = data.main.temp - 273.15;
    showTemp.innerHTML = localTemp.toFixed(2) + "oC";
    showTemp.style.color = "blue";
    const windSpeed = document.getElementById("showWind");
    let localWindSpeed = data.wind.speed;
    windSpeed.innerHTML = localWindSpeed;
    const weatherDiscription = document.getElementById("discription");
    let showWeatherDiscription = data.weather[0].description;
    weatherDiscription.innerHTML = showWeatherDiscription;
    
    
})
.catch ((error) => {
    console.log(error)
})
})






