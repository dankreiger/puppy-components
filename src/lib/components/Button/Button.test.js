import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  describe('rendering', () => {
    it('should render', () => {
      const wrapper = shallow(<Button />);

      expect(wrapper).toBeDefined();
    });
  });

  describe('defaults', () => {
    it('should be size big by default', () => {
      expect(Button.defaultProps.size).toBe('big');
    });
  });

  describe('custom', () => {
    it('should allow custom className', () => {
      const props = {
        className: 'Custom'
      };
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper.hasClass(props.className)).toBe(true);
    });

    it('should allow custom theme', () => {
      const props = {
        theme: 'light'
      };
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper.props().theme).toBe('light');
    });

    it('should allow custom size', () => {
      const props = {
        size: 'small'
      };
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper.props().size).toBe('small');
    });
  });

  describe('behavior', () => {
    it('should be disableable', () => {
      const wrapper = shallow(<Button disabled />);

      expect(wrapper.prop('disabled')).toBe(true);
    });

    it('should call onClick', () => {
      const props = {
        onClick: jest.fn()
      };
      const wrapper = shallow(<Button {...props} />);
      wrapper.simulate('click');

      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
