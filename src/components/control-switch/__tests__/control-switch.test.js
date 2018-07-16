import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './control-switch-test-cases';

describe('ControlSwitch', () => {
  let testCase;
  let wrapper;

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', () => {
      const mockEvent = {
        target: {
          checked: true
        }
      };
      wrapper
        .find('input')
        .first()
        .props()
        .onChange(mockEvent);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(true, 'testinput');
    });
  });

  describe(testCases.emptyStringValue.description, () => {
    beforeEach(() => {
      testCase = testCases.emptyStringValue;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('input is not checked', () => {
      expect(wrapper.find('input').prop('checked')).toBe(false);
    });
  });

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('extra props works', () => {
      const props = wrapper
        .find('input')
        .last()
        .props();
      expect(props).toHaveProperty('disabled', true);
    });
  });

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('extra props works', () => {
      const props = wrapper
        .find('input')
        .last()
        .props();
      expect(props).toHaveProperty('autoFocus', true);
    });
  });
});
