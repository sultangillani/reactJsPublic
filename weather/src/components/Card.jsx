import React from 'react';
import { useWeather } from '../context/Weather';

function Card(props) {
    const weather = useWeather();

    return (
        <div className="card">
            <img src={weather.data?.current.condition.icon} width="50"/>
            <h2>{weather.data?.current.temp_c} C</h2>
            <h5>City of {weather.data?.location.country}, {weather.data?.location.region}, {weather.data?.location.name}</h5>
        </div>
    );
}

export default Card;