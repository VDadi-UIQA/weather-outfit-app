// src/utils/api.js

const API_KEY = 'b6b1aec3ede651a2f12dd560dee82d35';

export async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return await res.json();
}


// import React, { useEffect, useState } from 'react';

// const Weather = () => {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//      //const API_KEY = 'b6b1aec3ede651a2f12dd560dee82d35';
//      const API_KEY = 'b6b1aec3ede651a2f12dd560dee82d35'; 
//     // b6b1aec3ede651a2f12dd560dee82d35
     
//       const city = 'London';
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
//       //const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6b1aec3ede651a2f12dd560dee82d35`;

//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         setWeather(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   return (
//     <div>
//       {weather ? (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>{weather.weather[0].description}</p>
//           <p>Temperature: {weather.main.temp} °C</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// //export default Weather;


//   // if (!res.ok) throw new Error('API error');
//   // return res.json();