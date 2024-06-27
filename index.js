const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const weatherIconElement = document.getElementById('weatherIcon');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weatherDescription');

searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        const weatherData = {
            name: city,
            sys: { country: 'XX' }, // Replace with actual country code if needed
            main: { temp: getRandomTemperature(10, 30) }, // Replace with actual temperature
            weather: [{ icon: '01d', description: 'Clear' }] // Replace with actual weather data
        };
        displayWeather(weatherData);
    } else {
        alert('Please enter a city name!');
    }
});

function displayWeather(data) {
    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescriptionElement.textContent = data.weather[0].description;
}

function getRandomTemperature(min, max) {
    return Math.random() * (max - min) + min;
}
