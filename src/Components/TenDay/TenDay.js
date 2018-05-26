import React from 'react';
import Card from '../Card/Card.js';

const TenDay = props => {
  return (
    props.forecast.map((day, index) => {
      const key = index + day.day;
        return <Card 
                day = {day.day}
                condition = {day.condition}
                condtionIcon = {day.condtionIcon}
                high = {day.high}
                low = {day.low}
                key = {key}
              />
    })
  )
};

export default TenDay;