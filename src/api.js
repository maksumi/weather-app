const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function searchWeather(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=es`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Ciudad no encontrada');
    }
    
    return await response.json();
}
