import React from 'react';
import { useWeather } from '../context/Weather';

function Input(props) {
    const weather = useWeather();
    
    return (
        <input className={props.className} type={props.type} placeholder={props.placeholder} value={weather.searchCity} onChange={(e) => weather.setSearchCity(e.target.value) } />
    );
}

export default Input;