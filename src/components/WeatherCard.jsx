import React from 'react';
import { getOutfitRecommendation } from '../utils/outfitRules';

export default function WeatherCard({ weather }) {
  const { name, main, weather: w, wind } = weather;
  const recommendation = getOutfitRecommendation(main.temp, w[0].main);

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Weather in {name}</h2>
      <p>🌡 Temp: {main.temp} °C</p>
      <p>🌤 Condition: {w[0].main}</p>
      <p>💨 Wind: {wind.speed} m/s</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p className="mt-2 font-bold">👕 Outfit: {recommendation}</p>
    </div>
  );
}