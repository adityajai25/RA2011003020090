import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('API_URL') // Replace 'API_URL' with the actual API URL
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {trains.map(train => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;