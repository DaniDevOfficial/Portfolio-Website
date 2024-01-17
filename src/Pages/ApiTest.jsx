import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function ApiTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/example');
        setData(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ color: 'white' }}>This only works on https://david-bischof.ch and only when the WishAPI is running on localhost:3000</h1>
      {data && <p style={{ color: 'white' }}>{data}</p>}
    </div>
  );
};
