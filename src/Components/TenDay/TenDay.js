import React from 'react';
import Card from '../Card/Card.js';

const TenDay = props => {
  return (
    props.tenDay.map((day, index) => {
      let tenDayKey = index + day.day;
        return <Card 
                day = {day.day}
                condition = {day.condition}
                conditionIcon = {day.conditionIcon}
                high = {day.high}
                low = {day.low}
                key = {tenDayKey}
              />
    })
  )
};

export default TenDay;