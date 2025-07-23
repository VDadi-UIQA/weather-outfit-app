import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Weather-Based Outfit Recommender</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
