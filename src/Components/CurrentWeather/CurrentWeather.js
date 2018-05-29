import React from 'react';
import Card from '../Card/Card.js'; 

const CurrentWeather = props => {
  let currentWeatherKey = Date.now();
  return ( <Card  
      city = {props.forecast.city}
      condition = {props.forecast.condition}
      temperature = {props.forecast.temperature}
      weekday = {props.forecast.weekday}
      high = {props.forecast.high}
      low = {props.forecast.low}
      summary = {props.forecast.summary}
      key = {currentWeatherKey}
    /> 
  )
}; 

export default CurrentWeather;