import React, { Component } from 'react';
import Card from '../Card/Card.js'; 

const SevenHour = (props) => {
  return (
    props.forecast.map((hour, index) => {
      const key = index + hour.hour;
        return  <Card 
                  hour = {hour.hour}
                  temperature = {hour.temperature}
                  condition = {hour.condition}
                  key = {key}
                />
    })
  )
};

export default SevenHour;