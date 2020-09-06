import React from 'react';
import SuggestionList from '../suggestion-list.js';
import { shallow } from 'enzyme';

describe('Suggestion list component', () => {
  it('list component', () => {
    const mockFnHandler = jest.fn();
    const mockList = [
      {
        id: 0,
        title: 'book title',
        author: 'author name',
        summary: 'summary of the book text'
      }
    ];
    const wrapper = shallow(
      <SuggestionList list={mockList} addSelectedBook={mockFnHandler} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
