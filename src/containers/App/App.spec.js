import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

describe('<App />', () => {
  // define our tests in here
  let wrapper; // "dom" node wrapper element
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has a Router component', () => {
    expect(wrapper.find('Router')).to.have.length(1);
  });
});
