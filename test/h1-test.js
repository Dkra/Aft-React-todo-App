import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import 'ignore-styles'
import App from '../app/App';

describe('App\'s title should be My Todo App [ React ]', function () {
  it('App\'s title should be My Todo App [ React ]', function () {
    let app = shallow(<App/>);
    expect(app.find('h1').text()).to.equal('My Todo App [ React ]');
  });
});
