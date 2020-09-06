import React from 'react';
import SearchBox from '../index';
import { shallow } from 'enzyme';

describe('Searchbox component', () => {
  it('unit testing searchbox', () => {
    const mockFnHandler = jest.fn();
    const wrapper = shallow(<SearchBox addSelectedBook={mockFnHandler} />);
    expect(wrapper).toMatchSnapshot();
  });
});
