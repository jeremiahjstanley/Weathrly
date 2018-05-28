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
      city: '',
      state: ''
    }
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation(input) {
    let userInput = input.split(',');
    let city = userInput[0];
    let state = userInput[1];
    console.log(city, state)
    fetch(`http://api.wunderground.com/api/${API_K}//conditions/geolookup/hourly/forecast10day/q/${state}/${city}.json`)
      .then(data => data.json())
      .then(parsedData => {
      this.setState({
          city: city,
          state: state,
          sevenHour: sevenHourWeatherData(parsedData),
          tenDay: tenDayWeatherData(parsedData),
          currentWeather: currentWeatherData(parsedData)
        })
      })
      .catch(err => console.log('parsing failed', err))
  }

  render() {
    if (this.state.city) {
      console.log(this.city)
      return (
      <div className="root">
      <h2>Enter Location</h2>
        <Search 
        getLocation={this.getLocation}
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
    } else {
      return (
        <div className="root">
          <h1>Welcome to Weatherly</h1>
           <Search 
            getLocation={this.getLocation}
          />
        </div>
      )
    }

  } 
}


export default App;