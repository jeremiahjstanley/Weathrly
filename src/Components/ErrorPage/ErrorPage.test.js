import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ErrorPage from './ErrorPage.js';

describe('Error Page tests', () => {
  describe('Error Page unit tests', () => {
    test('Error Page generates an error page', () => {
      let renderedErrorPage = shallow(<ErrorPage/>)
      const expectedErrorPageLength = 1
      const actualErrorPageLength = renderedErrorPage.find('.error-page').length

      expect(actualErrorPageLength).toEqual(expectedErrorPageLength);
    });
  });
});
