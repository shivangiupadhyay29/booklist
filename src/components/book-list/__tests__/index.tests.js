import React from 'react';
import BookList from '../index.js';
import { shallow } from 'enzyme';

describe('BookList component', () => {
  it('BookList component unit testing', () => {
    const mockBookObject = {
      id: 0,
      title: 'book title',
      author: 'author name',
      summary: 'summary of the book text'
    };
    const mockList = [mockBookObject];
    const wrapper = shallow(<BookList books={mockList} />);
    expect(wrapper).toMatchSnapshot();
  });
});
