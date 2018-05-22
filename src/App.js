import React, { Component } from 'react';
import MockData from './MockData.js';
import CurrentWeather from './CurrentWeather.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: data.current_observation.display_location.city,
      condition: data.current_observation.weather,
      temperature: data.current_observation.temp_f,
    }
  }

  render() {
    return (
      <div className="root">
        <CurrentWeather 
        city= {this.state.city}
        condition = {this.state.condition}
        temperature = {this.state.temperature}
        />
      </div>

    );
  }
}

export default App.js