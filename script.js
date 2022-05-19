const apiKey = "610abec00815eaccd197c909d87fab31";
const fahrenheitToCelsius = a => (a - 273);

const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("CityName");
    const country = document.getElementById("Country");
    const temperature = document.getElementById("Temperature");
    const fahrenheit = weather.main.temp;
    const clouds = document.getElementById("Clouds");
    const humidity = document.getElementById("Humidity");
    const wind = document.getElementById("Wind")
    clouds.textContent = weather.clouds.all + `%`;
    city.textContent = weather.name;
    country.textContent = weather.sys.country;
    humidity.textContent = weather.main.humidity + `%`;
    wind.textContent = weather.wind.speed + `m/s`
    temperature.textContent = fahrenheitToCelsius(fahrenheit.toFixed()) + `°`
}

const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((res) => showWeather(res))
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => getWeatherByLocation(pos))
}

getMyLocation();

const city = {
    name: "Katowice",
    population: 4323232,
    size: `Duże miasto`,
    streets: {
        main: "coś tam",
        small: "aaaaa"
    }
}


