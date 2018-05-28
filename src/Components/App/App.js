import React, { Component } from 'react';
import  { currentWeatherData, sevenHourWeatherData, tenDayWeatherData } from './dataCleaner.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import Search from '../Search/Search.js'
import { API_K } from '../config.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: [],
      sevenHour: [],
      tenDay: [],
      search: []
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${API_K}//conditions/geolookup/hourly/forecast10day/q/CO/Denver.json`)
      .then(data => data.json())
      .then(parsedData => {
      this.setState({
          sevenHour: sevenHourWeatherData(parsedData),
          tenDay: tenDayWeatherData(parsedData),
          currentWeather: currentWeatherData(parsedData)
        })
      })
      .catch(err => console.log('parsing failed', err))
  }

  render() {
    // if (this.state.city) {
      return (
      <div className="root">
      <h2>Enter Location</h2>
        <Search 
        /> 
        <CurrentWeather 
          forecast={this.state.currentWeather}
        />
        <SevenHour
          sevenHour={this.state.sevenHour}
        />
        <TenDay
          tenDay={this.state.tenDay}
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