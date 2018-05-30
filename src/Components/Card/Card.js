import React from 'react';
import './Card.css'

const Card = props => {
  if (props.hour) {
    return ( 
    <div className={determineBkg(props)} id={props.key}>
      <p>{props.hour}</p>
      <img src= {props.conditionIcon} alt="Weather icon"/>
      <p>{props.temperature}</p>
      <p>{props.condition}</p>
    </div>
    )
  }
  if (props.day) {
      return ( 
      <div className="day" id={props.key}>
        <p className="day-day">{props.day}</p>
        <img className="day-img" src= {props.conditionIcon} alt="Weather icon"/>
        <p className="day-highlow">{props.high} | {props.low}</p>
        <p className="day-cond">{props.condition}</p>
      </div>
    )
  }
  if (props.city) {
    return (
      <div className="current-weather" id={props.key}>
        <h2>{props.city}</h2>
        <h1>{props.temperature}</h1>
        <p className="summ">{props.summary} </p>
        <p className="weekday">{props.weekday} TODAY</p>
        <h3><span>High:</span> {props.high} | <span>Low:</span> {props.low} </h3>
      </div>
    )
  }
}
    function determineBkg(props) {
      if (props.temperature > 65) {
        return 'sunny';
      } else if (props.temperature < 30) {
        return 'cold';
      } else {
        return 'normal'
      }
    }

export default Card;