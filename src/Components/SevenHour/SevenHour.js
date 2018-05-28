import React from 'react';
import Card from '../Card/Card.js'; 

const SevenHour = props => {
  return (
    props.sevenHour.map((hour, index) => {
      let key = index + hour.hour;
        return  <Card 
                  hour = {hour.hour}
                  temperature = {hour.temperature}
                  condition = {hour.condition}
                  conditionIcon = {hour.conditionIcon}
                  key = {key}
                />
    })
  )
};

export default SevenHour;