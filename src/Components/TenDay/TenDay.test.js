import React from 'react';
import { shallow } from 'enzyme';
import TenDay from './TenDay.js';

describe('Ten Day tests', () => {
  const mockArray = [
  { day: "Wednesday",
    condition: "70",
    conditionIcon: "Sunny",
    high: "75",
    low: "55",
    key: "1" },
  { day: "Thursday",
    condition: "72",
    conditionIcon: "Sunny",
    high: "75",
    low: "55",
    key: "2"}
  ]

  describe('Ten Day unit tests', () => {
    test('Ten Day generates the proper number of card components', () => {
      const renderedTenDay = shallow(<TenDay tenDay={ mockArray } />);
      const expectedDayLength = 2
      const actualDayLength = renderedTenDay.find('Card').length;

      expect(actualDayLength).toEqual(expectedDayLength);
    });
    test('Seven Hour generates card components with the correct props', () => {
      const expectedDayProps =   {day: "Wednesday",
                                  condition: "70",
                                  conditionIcon: "Sunny",
                                  high: "75",
                                  low: "55",
                                 }

      const renderedTenDay = shallow(<TenDay tenDay={ [expectedDayProps] } />);
      const actualDayProps = renderedTenDay.find('Card').props()
      
      expect(actualDayProps).toEqual(expectedDayProps);
    });
  });
});