import React, { Component } from 'react';
import data from './MockData.js';
import CurrentWeather from './CurrentWeather.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      currentCity: ''
    }
  }

  updateCurrentCityValue(event) {
    this.setState({city: event.target.city})
  }

  submitCurrentCity() {
    this.setState({ })
  }

  render() {
    return (
      <div className="root">
        <h2>Enter Location</h2>
        <input 
          type="text"
          value={this.state.city}
          onChange={(event) => this.updateCurrentCityValue(event)} />
        <CurrentWeather 
        city={data.current_observation.display_location.city}
        condition = {data.current_observation.weather}
        temperature={data.current_observation.temp_f} 
        />
      </div>

    );
  }
}

export default App