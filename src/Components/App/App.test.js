import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App/App.js';


describe('App tests', () => {
  let renderedApp; 
  beforeEach(() => {
    renderedApp = shallow(<App />, { disableLifecycleMethods: true});
  });
  describe('App unit tests', () => {
    test('App has default state', () => {
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
    test('App renders a splash page', () => {
      renderedApp.render()

      const actualState = renderedApp.find('.splash-page').length
      const expectedState = 1

      expect(actualState).toEqual(expectedState);
    });
    test('App renders a 404', () => {
      renderedApp.setState({ error: true })
      renderedApp.render()

      const actualState = renderedApp.find('.error-page').length
      const expectedState = 1

      expect(actualState).toEqual(expectedState);
    });
    test('App renders the current weather', () => {

      const mockData = {
        city: "Denver",
        state: "Co",
        error: false
      };

      renderedApp.setState({ mockData })
      renderedApp.render()

      const actualState = renderedApp.find('.current-weather').length
      const expectedState = 1

      expect(actualState).toEqual(expectedState);
    });
  });
});

      // 
