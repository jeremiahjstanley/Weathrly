import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'; 

describe('Current Weather tests', () => {
  let mockArray = [
  { city: "Denver, CO",
    condition: "Sunny",
    temperature: "70",
    weekday: "Wednesday",
    high: "75",
    low: "55",
    summary: "Mostly, sunny",
    key: "1" }
  ]

  describe('Current Weather unit tests', () => {
    test('Current Weather generates the proper number of card components', () => {
      const renderedCurrentWeather = shallow(<CurrentWeather forecast={ mockArray }/>)
      const expectedWeatherLength = 1
      const actualWeatherLength = renderedCurrentWeather.find('Card').length

      expect(actualWeatherLength).toEqual(expectedWeatherLength);
    });
    test('Seven Hour generates card components with the correct props', () => {
      const expectedWeatherProps =  { city: "Denver, CO",
                                      condition: "Sunny",
                                      temperature: "70",
                                      weekday: "Wednesday",
                                      high: "75",
                                      low: "55",
                                      summary: "Mostly, sunny",
                                    }

      const renderedCurrentWeather = shallow(<CurrentWeather forecast={ expectedWeatherProps }/>)
      const actualWeatherProps = renderedCurrentWeather.find('Card').props()

      expect(actualWeatherProps).toEqual(expectedWeatherProps);
    });
  });
});