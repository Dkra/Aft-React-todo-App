import React from 'react';
import { mount } from 'enzyme';
import { expect, assert } from 'chai';
import 'ignore-styles'
import App from '../app/App';

describe('Click on Remove All Todos', function () {
  it('should remove all todos', function () {

    let app = mount(<App/>)

    for(let i = 0; i < 3; i++) {
      app.setState({
        value: '123'
      })
      app.find('.add-todo').simulate('click')
    }

    app.find("button.remove-all").simulate('click');

    expect(app.find('.todoItem').length).to.equal(0);
  });
});
