import React from 'react';
import Listing from '../index.js';
import { shallow, mount } from 'enzyme';
import Option from '../option';

describe('list-options', () => {
  it('list -item for options component unit testing', () => {
    const wrapper = shallow(
      <Option classText={'label-size'} content={'testing content'} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
