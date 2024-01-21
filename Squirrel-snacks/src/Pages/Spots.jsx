import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Spots.css';
import SpotCard  from '../components/SpotCard';



const Spots = () => {
  const [locations, setLocations] = useState([]);
 
  useEffect(() => {
    // Fetch locations from the backend API when the component mounts
    fetch('http://localhost:3400/locationdata')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching locations:', error));
  }, [locations]); 
  console.log (locations)
  return (
    <div className="spots-page">
      <NavBar />
      <div className="wrapper"></div>
      <header>
        <h1>Spots Page</h1>
      </header>
      <main>
        <div className="spot-container">
          {locations.map((spot, index) => (
            <SpotCard key={index} title={spot.title} content={spot.content} imageUrl={spot.imgurl} />
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Spots Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Spots;



