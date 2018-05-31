import React from 'react';
import Card from '../Card/Card.js'; 
import './SevenHour.css'

const SevenHour = props => {
  return (
    <div className="seven-hour-cont">
    {
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
    }
    </div>
  )
};

export default SevenHour;