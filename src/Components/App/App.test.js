import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App.js';

describe('App unit test', () => {
  let renderedApp 
  beforeEach(() => renderedApp = shallow(<App />));

  describe('App default state', () => {
    test('App has default state of the current weather', () => {
      const expectedState = {};
      const actualState = renderedApp.state('currentWeather');

      expect(actualState).toEqual(expectedState);
    });
   })
  describe('App class methods', () => {
    test('App has a method updateCurrentCityValue', )
  })
});
