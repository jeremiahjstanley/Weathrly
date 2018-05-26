import React from 'react';

const Card = props => {
  console.log(props)
  if (props.hour) {
    return ( 
    <div id={props.key}>
      <h1>Hour: {props.hour}</h1>
      <h1>Temperature: {props.temperature}</h1>
      <img scr={props.conditionIcon} />
      <h1>{props.condition}</h1>
    </div>
    )
  }
  if (props.day) {
      return ( 
      <div id={props.key}>
        <h1>Day: {props.day}</h1>
        <h1>High: {props.high}</h1>
        <h1>Low: {props.low}</h1>
        <img scr={props.conditionIcon} />
        <h1>Condition: {props.condition}</h1>
    </div>
    )
  }
  return (
    <div id={props.key}>
      <h1>City: {props.city}</h1>
      <h1> Temperature: {props.temperature} </h1>
      <h1> Weekday: {props.weekday} </h1>
      <h1> high: {props.high} </h1>
      <h1> Low: {props.low} </h1>
      <h1> Condition: {props.summary} </h1>
    </div>
  )
}

export default Card;