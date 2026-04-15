const weatherResult = document.getElementById('weather-result');

export function displayWeather(data) {
    weatherResult.classList.remove('hidden');
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p class="temp">${Math.round(data.main.temp)}°C</p>
        <p class="description">${data.weather[0].description}</p>
        <p class="humidity">Humedad: ${data.main.humidity}%</p>
    `;
}

export function showError(message) {
    weatherResult.classList.remove('hidden');
    weatherResult.innerHTML = `<p class="error">${message}</p>`;
}
