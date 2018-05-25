import React, { Component } from 'react';
import Card from './Card.js';
// import 

class SevenHour extends Component {
  constructor(props) {
    super()
    this.state = {
      hours: []
    }
    
  };

  displaySevenHourForecast() {
    return this.state.hours.map((hour, index) => {
      return <li key = {index}> {hour} </li>
    })
  };

  render() {
    const sevenHourCards = this.state.days.map((hour, index) => {
      let i = index;
      const key = index + hour.hour;
      return (
        <Card 
          hour = {hour.hour}
          icon = {hour.icon}
          temperature = {hour.temperature}
          condition = {hour.condition}
          key = {key}
        />
      )
    });

    return (
      <div>
        { sevenHourCards }
      </div>
    )
  }
};