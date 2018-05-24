import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App/App.js';

describe('App unit test', () => {
  let renderedApp; 
  beforeEach(() => renderedApp = shallow(<App />));

  describe('App default state', () => {
    test('App has default state of the city', () => {
      const expectedState = {
        city: ''
      };
      const actualState = renderedApp.state();

      expect(actualState).toEqual(expectedState);
    });
  });

    test('updateCurrentCityValue changes the city based on user input', () => {
      const expectedState = 'some city';
      const mockEvent = { target: { value: 'some city' } };
      renderedApp.instance().updateCurrentCityValue(mockEvent);

      const actualState = renderedApp.state().city;

      expect(actualState).toEqual(expectedState);
    })
});
