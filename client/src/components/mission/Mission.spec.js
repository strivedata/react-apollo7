import React from 'react';
import {shallow} from 'enzyme';
import Home from './Mission';

describe('<Mission />', () => {
  it('should have a section headline called \'Mission\'', () => {
    const wrapper = shallow(<Home />);

    const firstSectionHeadline = wrapper.find('h1 .mission').text();
    expect(firstSectionHeadline).toEqual('Mission');
  });

});
