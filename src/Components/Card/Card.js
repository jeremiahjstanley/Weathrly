import React from 'react';

const Card = props => {
  return ( <div>
    <h1>Hour: {props.hour}</h1>
    <h1>Temperature: {props.temperature}</h1>
    <img scr='{props.condtionIcon}' />
    <h1>{props.codition}</h1>
  </div>
  )
}

export default Card;