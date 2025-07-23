import React from 'react';

export default function CityHistory({ history, onSelect }) {
  return (
    <div className="mt-4">
      <h3 className="font-medium mb-2">Search History</h3>
      <ul className="list-disc pl-5 space-y-1">
        {history.map((city, index) => (
          <li
            key={index}
            onClick={() => onSelect(city)}
            className="cursor-pointer text-blue-600 hover:underline"
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}