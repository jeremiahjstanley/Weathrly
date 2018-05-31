import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';
import { currentWeatherData, sevenHourWeatherData, tenDayWeatherData } from '../App/dataCleaner.js';
import data from '../../MockData.js'


describe('Card current weather unit test', () => {
  test('Card renders a current weather card ', () => {
    let mockData = currentWeatherData(data)
    let renderedCard = mount(<Card 
                                  city = {mockData.city}
                                  condition = {mockData.condition}
                                  temperature = {mockData.temperature}
                                  weekday = {mockData.weekday}
                                  high = {mockData.high}
                                  low = {mockData.low}
                                  summary = {mockData.summary}
                                />);

    const actualState = renderedCard.find('.current-weather').length
    const expectedState = 1

    expect(actualState).toEqual(expectedState);
  });
});

describe('Card seven hour unit test', () => {
  test('Card renders a seven hour card ', () => {
    let mockData = sevenHourWeatherData(data)

    let renderedCard = mount(<Card 
                                  hour = {mockData[0].hour}
                                  temperature = {mockData[0].temperature}
                                  condition = {mockData[0].condition}
                                  conditionIcon = {mockData[0].conditionIcon}
                                />);
    const actualState = renderedCard.find('.normal').length
    const expectedState = 1 

    expect(actualState).toEqual(expectedState);
  });
});

describe('Card ten day unit test', () => {
  test('Card renders a ten day card ', () => {
    let mockData = tenDayWeatherData(data)
    let renderedCard = mount(<Card 
                                  day = {mockData[0].day}
                                  condition = {mockData[0].condition}
                                  conditionIcon = {mockData[0].conditionIcon}
                                  high = {mockData[0].high}
                                  low = {mockData[0].low}
                                />);
    const actualState = renderedCard.find('.day').length
    const expectedState = 1

    expect(actualState).toEqual(expectedState);
  });
});

