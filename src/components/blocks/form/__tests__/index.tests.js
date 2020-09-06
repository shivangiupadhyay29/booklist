import React from 'react';
import Form from '../index';
import { shallow, mount } from 'enzyme';

describe('Form component snapshot', () => {
  it('unit testing form component renders', () => {
    const mockFnHandler = jest.fn();
    const placeholder = 'Search your books';
    const wrapper = shallow(
      <Form onChangeHandler={mockFnHandler} inputPlaceholder={placeholder} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  //   it('input form changes', () => {
  // const mockFnHandler = jest.fn();
  // const placeholder = 'Search your books';
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = mount(
  // <Form onChangeHandler={mockFnHandler} inputPlaceholder={placeholder} />
  //   );
  // });
  // wrapper.find('input').simulate('focus');
  // wrapper.find('input').simulate('change', { target: { value: 'goals' } });

  // expect(wrapper.find(SuggestionList).props().list.length).toEqual(1);
  // console.log(wrapper.find(SuggestionList).props().list)
  //   });
});

describe('FORM working and functioning', () => {
  it('form component implementation', () => {
    let mockHandler = jest.fn();
    let inputPlaceholder = 'Search your books';
    const wrapper = mount(
      <Form onChangeHandler={mockHandler} inputPlaceholder={inputPlaceholder} />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('form').simulate('submit');
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'goal' } });
    expect(mockHandler).toHaveBeenCalled();
  });
});
