import React, { Component } from 'react';
import cityStateData from '../../cityStateData.js'

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      city: '',
      state: ''
    }
    this.updateCurrentCityValue = this.updateCurrentCityValue.bind(this);
  }

  updateCurrentCityValue(event) {
    const cityState = {city: event.target.value}
    this.setState(cityState)
  }

  verifyCity(event) {
    event.str.split(',')
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          value={this.state.city}
          onChange={(event) => this.verifyCity(event)}
        />
        <button onClick={(event) => this.submitCurrentCity(event)}>
          Submit
        </button>
      </form>
      )

  }
}

export default Search;