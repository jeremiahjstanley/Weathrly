import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      location: ''
    }
    this.updateLocationValue = this.updateLocationValue.bind(this);
  }
  
  updateLocationValue(event) {
    const location = {location: event.target.value}
    this.setState(location)
  }

  render() {
    return (
      <form onSubmit= {(event) => event.preventDefault()}>
        <input 
          type="text"
          onChange={(event) => this.updateLocationValue(event)}
        />
        <button onClick = {(event) => this.props.getLocation(this.state.location)}>
          Submit
        </button>
      </form> 
    )
  }
}
export default Search;