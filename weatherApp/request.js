const key = 'f17daeaeca054442cd33e6f9028cb8a3';


const requestCity = async (city) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`

    const response = await fetch(baseUrl+query);
    const data = await response.json();

    return data;
}
