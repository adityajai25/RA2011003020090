import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TrainCard = ({ train }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h6">{train.trainName}</Typography>
        <Typography>Train Number: {train.trainNumber}</Typography>
        <Typography>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</Typography>
        <Typography>Seats Available - Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</Typography>
        <Typography>Price - Sleeper: {train.price.sleeper}, AC: {train.price.AC}</Typography>
        <Typography>Delayed By: {train.delayedBy} minutes</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;