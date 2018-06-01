import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App/App.js';

global.JSON = {
  parse: jest.fn(), 
  stringify: jest.fn()
}
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn()
}

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
        location: '',
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
      const mockState = {
        currentWeather: [{}],
        sevenHour: [{}],
        tenDay: [{}],
        location: 'Denver, CO',
        error: false
      };

      renderedApp.setState(mockState)

      const actualState = renderedApp.find('.current-weather').length
      const expectedState = 1

      expect(actualState).toEqual(expectedState);
    });
  });
});
// describe('App unit tests', () => {
//     test('App updates state when search info submited', () => {
//       spyOn(console, 'error');
//       let location = 'Denver, CO'
//       let renderedApp = mount(<App />)
//       let mockEvent = jest.fn(() => {
//         renderedApp.instance()
//       })
//       console.log(mockEvent)
//       const expectedState = {
//         currentWeather: [],
//         sevenHour: [],
//         tenDay: [],
//         city: 'Denver',
//         state: 'CO',
//         error: false
//       }

//       const actualState = renderedApp.state();
//       expect(actualState).toEqual(expectedState);
//     });
// });

