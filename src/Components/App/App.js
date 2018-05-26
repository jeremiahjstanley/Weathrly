import React, { Component } from 'react';
import data from '../../MockData.js';
import  { currentWeatherData, sevenHourWeatherData } from './dataCleaner.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      sevenHour: [],
      tenDay: [],
      currentWeather: {},
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

  componentDidMount() {
    this.setState({
      sevenHour: sevenHourWeatherData(data),
      // tenDay: 
    })
  }

  render() {
    // if (this.state.city) {
      return (

        <div className="root">

        <h2>Enter Location</h2>

        <input 
        type="text"
        value={this.state.city}
        onChange={(event) => this.updateCurrentCityValue(event)}
        />

        <button onClick={(event) => this.submitCurrentCity(event)}>Submit</button>

        <CurrentWeather 
        weather={this.state.currentWeather}
        />

        <SevenHour
        forecast={this.state.sevenHour}
        />

      </div>
      );
    // } else {
    //   return (
    //     <div className="root">
    //       <h1>Welcome to Weatherly</h1>
    //       <input type = "text" value = { this.state.city }
    //       onChange = {(event) => this.updateCurrentCityValue(event)}/> 
    //       <button onClick = {(event) => this.submitCurrentCity(event)}> Submit </button>
    //     </div>
    //   )
    // }

  } 
}


export default App;