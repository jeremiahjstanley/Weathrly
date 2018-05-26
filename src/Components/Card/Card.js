import React from 'react';

const Card = props => {
  console.log(props.current)
  if (props.hour) {
    return ( 
    <div>
      <h1>Hour: {props.hour}</h1>
      <h1>Temperature: {props.temperature}</h1>
      <img scr='{props.condtionIcon}' />
      <h1>{props.codition}</h1>
    </div>
    )
  }
  if (props.day) {
      return ( 
      <div>
        <h1>Day: {props.day}</h1>
        <h1>High: {props.high}</h1>
        <h1>Low: {props.low}</h1>
        <img scr='{props.condtionIcon}' />
        <h1>{props.codition}</h1>
    </div>
    )
  }
  return (
    <div>
      <h1>City: {props.city}</h1>
      <h1> Temperature: {props.temperature} </h1>
    </div>
  )
}

export default Card;