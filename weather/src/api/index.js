const baseURL = 'https://api.weatherapi.com/v1/current.json?key=e9615ab350aa4512a5155300250509';

export const getWeatherDataForCity = async (city) => {
    //q=London&aqi=no
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async (lat,lng) => {
    //q=London&aqi=no
    const response = await fetch(`${baseURL}&q=${lat},${lng}&aqi=yes`);
    return await response.json();
}