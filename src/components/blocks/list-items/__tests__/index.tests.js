import React from 'react';
import Listing from '../index.js';
import { shallow } from 'enzyme';

describe('Listing component', () => {
  it('Listing component unit testing', () => {
    const mockFnHandler = jest.fn();
    const mockBookObject = {
      id: 0,
      title: 'book title',
      author: 'author name',
      summary: 'summary of the book text'
    };
    const mockList = [mockBookObject];
    const wrapper = shallow(
      <Listing
        list={mockList}
        onClickHandler={mockFnHandler}
        keyProp={'id'}
        label={['title', 'author', 'summary']}
        item={mockBookObject}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
