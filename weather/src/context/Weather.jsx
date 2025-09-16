import { createContext, useState, useContext } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

export const WeatherContext = createContext(null);

export const useWeather = () => {
    const Weather = useContext(WeatherContext);
    return Weather;
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }

    const fetchCurrentUserLocationData = async () => {
        const response = await navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
        });
    }

    //fetchCurrentUserLocationData();
    return (
        <WeatherContext.Provider value={ {data, searchCity, setSearchCity, fetchData, fetchCurrentUserLocationData} } >
            { props.children }
        </WeatherContext.Provider>
    )
}