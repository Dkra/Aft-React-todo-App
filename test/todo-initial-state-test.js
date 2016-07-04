import React from 'react';
import {render} from 'enzyme';
import { expect } from 'chai';
import 'ignore-styles'
import App from '../app/App';

describe('Todo list is empty when initialize', function () {
  it('Todo list is empty when initialize', function () {
    let app = render(<App/>);
    expect(app.find('.isComplete').length).to.equal(0);
  });
});
