import React from 'react';
import { mount } from 'enzyme';
import { expect, assert } from 'chai';
import 'ignore-styles'
import App from '../app/App';

describe('Remove All Todos', function () {
  it('Remove All Todos', function () {

    let app = mount(<App/>)

    let todoLengthBefore = app.find('.todoItem').length

    // console.log('todoLengthBefore: ', todoLengthBefore);

    for(let i = 0; i < 3; i++) {
      app.setState({
        value: '123'
      })
      app.find('.add-todo').simulate('click')
    }
    // console.log('todoItem Length: ', app.find('.todoItem').length);

    app.find("button.remove-all").simulate('click');

    assert.equal(todoLengthBefore,  app.find('.todoItem').length );
  });
});
