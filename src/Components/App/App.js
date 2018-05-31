import React, { Component } from 'react';
import  { currentWeatherData, sevenHourWeatherData, tenDayWeatherData } from './dataCleaner.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import Search from '../Search/Search.js'
import ErrorPage from '../ErrorPage/ErrorPage.js';
import { API_K } from './config.js';
import './App.css'


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
          currentWeather: currentWeatherData(parsedData),
          error: false
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
  
  renderCurrentWeather() {
    return (
      <div className="root, current-weather">
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
  }

  renderErrorPage() {
    return (
      <div className="root, error-page">
        <ErrorPage/>
        <Search 
          getLocation={this.getLocation}
        />
      </div>
    )
  }

  renderSplashPage() {
    return (
        <div className="root, splash-page">
          <h1>Welcome to Weathrly</h1>
            <Search 
              getLocation={this.getLocation}
            />
        </div>
      )
  }

  render() {
    if (this.state.error) {
        return this.renderErrorPage()
    }
    if (this.state.city) {
      return this.renderCurrentWeather()
    } else
        return this.renderSplashPage()
  }
  
}


export default App;