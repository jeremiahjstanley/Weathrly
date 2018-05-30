import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App/App.js';


describe('App unit test', () => {
  let renderedApp; 
  beforeEach(() => {
    renderedApp = shallow(<App />, { disableLifecycleMethods: true});
  });
  describe('App default state', () => {
    test('App has default state', () => {
      console.log(renderedApp)
      const expectedState = {
        currentWeather: [],
        sevenHour: [],
        tenDay: [],
        city: '',
        state: '',
        error: false
      };
      const actualState = renderedApp.state();

      expect(actualState).toEqual(expectedState);
    });
  });
});
