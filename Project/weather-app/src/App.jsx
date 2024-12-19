import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OpenWeatherMap API key
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key

  // Handle city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Fetch weather data
  const fetchWeatherData = async () => {
    if (!city) return; // Don't fetch if city is empty
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch on city change or on enter key press
  useEffect(() => {
    if (city && !loading) {
      fetchWeatherData();
    }
  }, [city, loading]);

  // Handle Enter key press to trigger search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeatherData();
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && !loading && !error && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
