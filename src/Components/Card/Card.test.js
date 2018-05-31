import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card unit test', () => {

  let renderedCard = shallow(<Card 
                                city = {mockData.city}
                                condition = {mockData.condition}
                                temperature = {mockData.temperature}
                                weekday = {mockData.weekday}
                                high = {mockData.high}
                                low = {mockData.low}
                                summary = {mockData.summary}
                                key = {mockData.key}
                              />);

  describe('Card UI tests', () => {
    test('Card renders a seven hour card ', () => {


      const actualState = renderedApp.find('.normal')
      const expectedState = 2

      expect(actualState).toEqual(expectedState);
    });
  describe('Card UI tests', () => {
    test('Card renders a ten day card ', () => {
      renderedApp.setState({ tenDay: [{},{}] })

      renderedApp.render()

      const actualState = renderedApp.find('.normal').length
      const expectedState = 2

      expect(actualState).toEqual(expectedState);
    });
    test('Card renders a current weather card ', () => {
      renderedApp.setState({ currentWeather: [{}] })

      renderedApp.render()

      const actualState = renderedApp.find('.normal').length
      const expectedState = 1

      expect(actualState).toEqual(expectedState);
    });
  })
});