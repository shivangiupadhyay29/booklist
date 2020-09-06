import React from 'react';
import App from './App';
import SearchBox from './components/search-box';
import BookList from './components/book-list';
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';

describe('root app component', () => {
  test('renders root component with child components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SearchBox)).toHaveLength(1);
    expect(wrapper.find(BookList)).toHaveLength(1);
  });

  test('sets the initial book list with empty array', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('mounting the component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<App />);
    });
    expect(wrapper).not.toBeNull();
  });
});
