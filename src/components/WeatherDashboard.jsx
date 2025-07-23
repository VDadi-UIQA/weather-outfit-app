import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import CityHistory from './CityHistory';
import  fetchWeatherData  from '../utils/api';
import { getOutfitRecommendation } from '../utils/outfitRules';


export default function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    try {
      setError('');
      const data = await fetchWeatherData(city);
      setWeather(data);
      setHistory(prev => [city, ...new Set(prev)].slice(0, 5));
    } catch (err) {
      setError('City not found or API error.');
      setWeather(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center mb-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Enter city name"
          className="flex-1 p-2 border rounded mr-2 dark:bg-gray-800"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      <CityHistory history={history} onSelect={setCity} />
    </div>
  );
}