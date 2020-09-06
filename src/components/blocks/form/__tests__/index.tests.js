import React from 'react';
import Form from '../index';
import { shallow } from 'enzyme';

describe('Form component', () => {
  it('unit testing form component renders', () => {
    const mockFnHandler = jest.fn();
    const placeholder = 'Search your books';
    const wrapper = shallow(
      <Form onChangeHandler={mockFnHandler} inputPlaceholder={placeholder} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
