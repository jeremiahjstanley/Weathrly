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
        <p>{props.day}</p>
        <img src= {props.conditionIcon} alt="Weather icon"/>
        <p>{props.high} | {props.low}</p>
        <p>{props.condition}</p>
      </div>
    )
  }
  if (props.city) {
    return (
      <div id={props.key}>
        <h2>{props.city}</h2>
        <h1>{props.temperature}</h1>
        <p>{props.summary} </p>
        <p>{props.weekday} TODAY</p>
        <p>{props.high} | {props.low} </p>
      </div>
    )
  }
}
    function determineBkg(props) {
      if (props.temperature > 60) {
        return 'sunny';
      }
    }

export default Card;