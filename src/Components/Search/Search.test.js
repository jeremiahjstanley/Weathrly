import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../Search/Search.js';

describe('Search unit test', () => {

  let renderedSearch;

  beforeEach(() => renderedSearch = shallow(<Search />));

  describe('Search default state', () => {
    test('Search default state test', () => {
      const expectedState = {
        location: '',
        // suggestions: []
      };
      const actualState = renderedSearch.state();

      expect(actualState).toEqual(expectedState);
    });

    test('When Searchs updateLocationValue changes the location based on user input', () => {
      const expectedState = 'Denver, Co';
      const mockEvent = { target: { value: 'Denver, Co' } };
      renderedSearch.instance().updateLocationValue(mockEvent);

      const actualState = renderedSearch.state().location;

      expect(actualState).toEqual(expectedState);
    });
  });

  describe('Search UI tests', () => {
    test('Search should render correct Search inputs', () =>  {
      const expectedSearchLength = 1;
      const actualSearchLength = renderedSearch.find('form').length;
      
      const expectedInputLength = 1;
      const actualInputLength = renderedSearch.find('input').length;
     
      const expectedSubmitButtonLength = 1;
      const actualSubmitButtonLength = renderedSearch.find('button').length;

      expect(actualSearchLength).toBe(expectedSearchLength);
      expect(actualInputLength).toBe(expectedInputLength);
      expect(actualSubmitButtonLength).toBe(expectedSubmitButtonLength);
      });
  });   
});
