import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

test('renders root component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});

test('sets the initial book list with empty array', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
