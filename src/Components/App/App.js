import React, { Component } from 'react';
import  { currentWeatherData, sevenHourWeatherData, tenDayWeatherData } from './dataCleaner.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import Search from '../Search/Search.js'
import ErrorPage from '../ErrorPage/ErrorPage.js';
import { API_K } from './config.js';
import locationData from '../../cityStateData.js';
import './App.css'

// const Trie = require('@chrisboylen/complete-me/lib/Trie');
// const trie = new Trie()
// trie.populate(locationData)
// autocomplete={trie.suggest}

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: [],
      sevenHour: [],
      tenDay: [],
      city: '',
      state: '',
      error: false
    }
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    let stringifiedLocation = localStorage.getItem('location');
    let parsedLocation = JSON.parse(stringifiedLocation);
    if (parsedLocation) {
      this.getLocation(parsedLocation)
    }
  }

  getLocation(input) {
    let userInput = input.split(',');
    let city = userInput[0];
    let state = userInput[1];
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
      this.storeLocation(input);
      })
      .catch(err => {
        this.setState({
          error: true,
        })
    })
  }

  storeLocation(location) {
    let stringifiedLocation = JSON.stringify(location);
    localStorage.setItem('location', stringifiedLocation);
  }

  render() {
    if (this.state.city) {
      return (
      <div className="root">
      <h2>Enter Location</h2>
        <Search 
          getLocation={this.getLocation}

        /> 
        <CurrentWeather 
          forecast={this.state.currentWeather}
          />
        <div className="seven-hour-cont">
          <SevenHour
            sevenHour={this.state.sevenHour}
          />
        </div>
        <div className="ten-day-cont">
          <TenDay
            tenDay={this.state.tenDay}
          />
        </div>
      </div>
      );
    } else if (this.state.error) {
      return (
        <div className="root">
          <ErrorPage/>
          <Search 
            getLocation={this.getLocation}
            
          />
        </div>
      )
    } else {
      return (
        <div className="root">
          <h1>Welcome to Weathrly</h1>
            <Search 
              getLocation={this.getLocation}

            />
        </div>
      )
    }
  } 
}


export default App;