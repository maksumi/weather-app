import { searchWeather } from './api.js';
import { displayWeather, showError } from './ui.js';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

async function handleSearch() {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
        const weatherData = await searchWeather(city);
        displayWeather(weatherData);
    } catch (error) {
        showError(error.message);
    }
}

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
