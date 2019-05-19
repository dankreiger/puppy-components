import React from 'react';
import { shallow } from 'enzyme';

import Text from './Text';
import { textStyles } from './Text.styles';

describe('<Text />', () => {
  describe('rendering', () => {
    it('should render', () => {
      const wrapper = shallow(<Text />);
      expect(wrapper).toBeDefined();
    });
  });

  describe('defaults', () => {
    it('should be an p tag by default', () => {
      expect(Text.defaultProps.tag).toBe('p');
      const wrapper = shallow(<Text />);
      expect(wrapper.name()).toBe('p');
    });
    it('should be have a bodyNormal style theme by default', () => {
      expect(Text.defaultProps.theme).toBe('bodyNormal');

      const wrapper = shallow(<Text />);
      expect(wrapper.props().style).toBe(textStyles.bodyNormal);
    });
  });

  describe('custom', () => {
    it('allow custom html tag', () => {
      const props = {
        tag: 'div'
      };
      const wrapper = shallow(<Text {...props} />);
      expect(wrapper.name()).toBe('div');
    });

    it('allows custom text', () => {
      const props = {
        text: 'The quick brown fox'
      };
      const wrapper = shallow(<Text {...props} />);
      expect(wrapper.name()).toBe('p');
      expect(wrapper.text()).toBe(props.text);
    });

    it('allows custom color', () => {
      const props = {
        customColor: 'purple'
      };
      const wrapper = shallow(<Text {...props} />);
      expect(wrapper.props().style.color).toBe(props.customColor);
    });
  });
});
