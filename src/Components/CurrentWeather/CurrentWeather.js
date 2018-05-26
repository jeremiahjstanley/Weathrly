import React from 'react';
import Card from '../Card/Card.js'; 

const CurrentWeather = props => {
  const key = Date.now
  return ( <Card  
      city = {city}
      condition = {condition}
      temperature= {temperature}
      day = {day}
      high = {high}
      low = {low}
      summary = {summary}
      key = {key}
    /> 
  )
}; 

export default CurrentWeather;