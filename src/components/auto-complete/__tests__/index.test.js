import React from 'react';
import AutoComplete from '../index.js';
import SuggestionList from '../suggestion-list';
import Form from '../../blocks/form';
import { shallow, mount } from 'enzyme';

describe('Autocomplete component', () => {
  const mockFnHandler = jest.fn();
  let wrapper;
  const limit = 4;
  beforeEach(() => {
    wrapper = mount(
      <AutoComplete limit={limit} addSelectedBook={mockFnHandler} />
    );
  });

  it('autocomplete component unit testing', () => {
    const wrapper = shallow(
      <AutoComplete limit={limit} addSelectedBook={mockFnHandler} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the component at initial stage', () => {
    console.log(wrapper.debug());

    expect(wrapper).not.toBeNull();
    expect(wrapper.props().limit).toEqual(4);
    wrapper.setProps({ limit: 3 });
    expect(wrapper.props().limit).toEqual(3);
    expect(wrapper.find(SuggestionList).props().list.length).toEqual(0);

    const input = wrapper.find(Form).render().find('input');
    expect(input[0]['attribs']['placeholder']).toEqual('Search your books');
  });

  it('on key press', () => {
    expect(wrapper.find(SuggestionList)).toHaveLength(1);
    expect(mockFnHandler).not.toHaveBeenCalled();
  });
});
