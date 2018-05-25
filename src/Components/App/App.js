import React, { Component } from 'react';
import cleanData from './dataCleaner.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
    this.updateCurrentCityValue = this.updateCurrentCityValue.bind(this);
  }

  updateCurrentCityValue(event) {
    const city = { city: event.target.value }
    this.setState(city)
  }

  submitCurrentCity() {
    this.displayCurrentWeather()
    //api fetch weather data
  }

  displayCurrentWeather() {

  }

  render() {
    if (this.state.city) {
      return (

        <div className="root">
        <h2>Enter Location</h2>
        <input 
        type="text"
        value={this.state.city}
        onChange={(event) => this.updateCurrentCityValue(event)} />
        <button onClick={(event) => this.submitCurrentCity(event)}>Submit</button>
        <CurrentWeather 
        city={cleanData.city}
        condition = {cleanData.condition}
        temperature={cleanData.temperature} 
        day={cleanData.day}
        high={cleanData.high}
        low={cleanData.low}
        summary={cleanData.summary}
        />
      </div>
      );
    } else {
      return (
        <div className="root">
          <h1>Welcome to Weatherly</h1>
          <input type = "text" value = { this.state.city }
          onChange = {(event) => this.updateCurrentCityValue(event)}/> 
          <button onClick = {(event) => this.submitCurrentCity(event)}> Submit </button>
        </div>
      )
    }

  } 
}


export default App;