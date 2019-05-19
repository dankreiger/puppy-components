import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
  describe('rendering', () => {
    it('should render', () => {
      const wrapper = shallow(<Heading />);

      expect(wrapper).toBeDefined();
    });
  });

  describe('defaults', () => {
    it('should be an h1 tag by default', () => {
      expect(Heading.defaultProps.tag).toBe('h1');

      const wrapper = shallow(<Heading />);
      expect(wrapper.name()).toBe('h1');
    });
  });

  describe('custom', () => {
    it('should allow custom html heading tag', () => {
      const props = {
        tag: 'h2'
      };
      const wrapper = shallow(<Heading {...props} />);
      expect(wrapper.name()).toBe('h2');
    });

    it('should allow custom text', () => {
      const props = {
        tag: 'h2',
        text: 'The quick brown fox'
      };
      const wrapper = shallow(<Heading {...props} />);
      expect(wrapper.name()).toBe('h2');
      expect(wrapper.text()).toBe(props.text);
    });
  });
});
