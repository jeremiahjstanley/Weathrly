import React from 'react';
import Card from '../Card/Card.js'; 

const SevenHour = props => {
  return (
    props.sevenHour.map((hour, index) => {
      let sevenHourKey = index + hour.hour + hour.condition;
        return  <Card 
                  hour = {hour.hour}
                  temperature = {hour.temperature}
                  condition = {hour.condition}
                  conditionIcon = {hour.conditionIcon}
                  key = {sevenHourKey}
                />
    })
  )
};

export default SevenHour;