import React from 'react';
import AutoComplete from '../index.js';
import { shallow } from 'enzyme';

describe('Autocomplete component', () => {
  it('autocomplete component unit testing', () => {
    const mockFnHandler = jest.fn();
    const limit = 2;
    const wrapper = shallow(
      <AutoComplete limit={limit} addSelectedBook={mockFnHandler} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
