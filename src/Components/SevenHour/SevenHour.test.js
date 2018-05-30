import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SevenHour from './SevenHour.js';

const mockArray = [
  { hour: "12:00pm",
    temperature: "70",
    condition: "Sunny",
    conditionIcon: "Sunny",
    key: "1" },
  { hour: "1:00pm",
    temperature: "72",
    condition: "Sunny",
    conditionIcon: "Sunny",
    key: "2"}
  ]

describe('Seven Hour tests', () => {
  describe('Seven Hour unit tests', () => {
    test('Seven Hour generates the proper number of card components', () => {
      let renderedSevenHour = shallow(<SevenHour sevenHour={mockArray}/>)
      const expectedHourlyLength = 2
      const actualHourlyLength = renderedSevenHour.find('Card').length

      expect(actualHourlyLength).toEqual(expectedHourlyLength);
    });
    test('Seven Hour generates card components with the correct props', () => {
      const expectedHourlyProps =   { hour: "12:00pm",
                                      temperature: "70",
                                      condition: "Sunny",
                                      conditionIcon: "Sunny"
                                    }

      const renderedSevenHour = shallow(<SevenHour sevenHour={ [expectedHourlyProps] }/>)
      const actualHourlyProps = renderedSevenHour.find('Card').props()

      expect(actualHourlyProps).toEqual(expectedHourlyProps);
    });
  });
});
