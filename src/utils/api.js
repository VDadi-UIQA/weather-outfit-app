

import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
     //const API_KEY = 'b6b1aec3ede651a2f12dd560dee82d35';
     const API_KEY = 'b6b1aec3ede651a2f12dd560dee82d35'; 
     
      const city = 'Hyderabad';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      //const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6b1aec3ede651a2f12dd560dee82d35`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;


  // if (!res.ok) throw new Error('API error');
  // return res.json();