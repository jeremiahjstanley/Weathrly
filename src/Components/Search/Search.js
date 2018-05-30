import React, { Component } from 'react';

// list={this.state.suggestions}

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      location: '',
      // suggestions: []
    }
    this.updateLocationValue = this.updateLocationValue.bind(this);
  }
  
  updateLocationValue(event) {
    const location = {location: event.target.value}
    // const suggestions = this.props.trie.suggest(location)
    this.setState({
      location: location,
      // suggestions: suggestions
    })
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