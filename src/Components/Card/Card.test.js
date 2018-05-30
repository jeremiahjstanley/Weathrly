import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App.js';
import Card from './Card.js';

describe('Card unit test', () => {

  let renderedApp = shallow(<App />);

  describe('Card UI tests', () => {
    test.skip('Card should render the correct markup when given current weather props', () => {

    })

    test.skip('Card should render the correct markup when given ten day props', () => {

    })

    test.skip('Card should render the correct markup when given seven hour props', () => {
      const renderedSevenHour = shallow(<SevenHour sevenHour={mockArray}/>)
      const mockArray = [{ hour: "12:00pm",
                           temperature: "70",
                           condition: "Sunny",
                           conditionIcon: "Sunny",
                           key: "1" }]
      
    })


  })

});