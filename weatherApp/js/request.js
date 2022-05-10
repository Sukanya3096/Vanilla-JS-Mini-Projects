import WEATHER_API_KEY from './api-keys';



const requestCity = async (city) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${WEATHER_API_KEY}`

    const response = await fetch(baseUrl+query);
    const data = await response.json();

    return data;
}
