import React, { useEffect, useState } from 'react';

const DailyShlokas = () => {
  const [shlokas, setShlokas] = useState([]);

  useEffect(() => {
    const fetchShlokas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/shlokas');
        const data = await response.json();
        setShlokas(data);
      } catch (error) {
        console.error('Error fetching Shlokas:', error);
      }
    };

    fetchShlokas();
  }, []);

  return (
    <div>
      <h2>Daily Shlokas</h2>
      <ul>
        {shlokas.map((shloka) => (
          <li key={shloka.id}>
            <h3>{shloka.title}</h3>
            <p>{shloka.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyShlokas;
