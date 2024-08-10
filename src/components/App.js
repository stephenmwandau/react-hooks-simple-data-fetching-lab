// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // State to store the image URL
  const [dogImage, setDogImage] = useState('');
  // State to manage the loading state
  const [loading, setLoading] = useState(true);

  // useEffect to fetch the dog image when the component mounts
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image URL in state
        setDogImage(data.message);
        // Set loading to false once the image is loaded
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the dog image:', error);
        // Set loading to false in case of error
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Display "Loading..." while the image is being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Display the dog image once it's fetched
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
