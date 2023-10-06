/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from './Button';

const ColorList = ({ onSelectColor }) => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch colors from the API
    axios
      .get('https://api.prolook.com/api/colors/prolook')
      .then((response) => {
        setColors(response.data.colors);
        setError(null); // Reset error state on success
      })
      .catch((error) => {
        setError('Error fetching colors'); // Set error state on failure
        console.error('Error fetching colors:', error);
      });
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto p-4 flex-1">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Colors:
          </h1>
          <ul className="max-w-full divide-y divide-gray-200">
            {colors.map((color) => (
              <li key={color.id} className="p-4 flex justify-between items-center">
                <span className="text-2xl font-bold">{color.name}</span>

                <Button onSelectColor={onSelectColor} color={color} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ColorList;
