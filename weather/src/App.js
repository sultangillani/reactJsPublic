import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { getWeatherDataForLocation } from './api';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  },[])
  return (
    <div className="App">
      <h1>Weather ForeCast</h1>
      <div className='weather-controls'>
        <Input type="text" className="location-input" />
        <Button value="Search" className="btn search-button" onClick={ () => weather.fetchData() } />
      </div>
      <Card />
      <Button value="Refresh" className="btn refresh-button" onClick={() => weather.fetchCurrentUserLocationData()} />
    </div>
  );
}

export default App;
