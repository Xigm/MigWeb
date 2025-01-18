import React, { useEffect, useState } from 'react';

function DogPage() {
  const [dogUrl, setDogUrl] = useState('');

  useEffect(() => {
    // Fetch random number from the Flask API
    fetch('http://localhost:5000/api/random-number')
      .then((response) => response.json())
      .then((data) => setDogUrl(`https://placedog.net/${data.number}`));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Here’s a Random Dog!</h1>
      {dogUrl ? <img src={dogUrl} alt="Random Dog" style={{ borderRadius: '10px' }} /> : <p>Loading...</p>}
    </div>
  );
}

export default DogPage;
