import React, { Component } from 'react';
import locationData from '../../cityStateData.js';
import Trie from '@chrisboylen/complete-me/';
const trie = new Trie();
trie.populate(locationData);



class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      location: '',
      suggestions: []
    }
    this.updateLocationValue = this.updateLocationValue.bind(this);
  }
  
  updateLocationValue(event) {
    const location = {location: event.target.value}
    this.setState(location)
    const suggestions = trie.suggest(this.state.location) || []
    this.setState({suggestions: suggestions})
  }

  citySuggest() {
    return this.state.suggestions.splice(0, 4).map(city => {
        return <option>{city}</option>
    })
  }

  render() {
    return (
      <form onSubmit= {(event) => event.preventDefault()}>
        <input 
          type="text"
          list="cities"
          onChange={(event) => this.updateLocationValue(event)}
        />
        <datalist id="cities">
          { this.citySuggest() }
        </datalist>
        <button onClick= {(event) => this.props.getLocation(this.state.location)}>
          Submit
        </button>
      </form> 
    )
  }
}
export default Search;