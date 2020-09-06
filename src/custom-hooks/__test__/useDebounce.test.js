import React from 'react';
import { shallow, mount } from 'enzyme';
import {useDebounce} from '../index';

describe('the custom hooks to provide debounce effect', () => {
  it('useDebounce', () => {
    let debounce;
    let wrapper;
    function HookWrapper() {
      debounce = useDebounce();
      return null;
    }
    wrapper = mount(<HookWrapper value={'goals'} delay={2000} />);
    expect(wrapper.props().delay).toEqual(2000);
    expect(wrapper.props().value).toEqual('goals');
  });

  it('return value', () => {
    const renderHook = (hook, value, delay) => {
      let results;
      function HookWrapper() {
        results = hook(value, delay);
        return null;
      }
      mount(<HookWrapper value={'goals'} delay={2000} />);
      return results;
    };
    let result = renderHook(useDebounce, 'goals', 2000);
    expect(result).toEqual('goals');
  });
});
