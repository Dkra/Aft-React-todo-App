import React from 'react';
import { mount } from 'enzyme';
import { expect, assert } from 'chai';
import 'ignore-styles'
import App from '../app/App';

describe('Add a todo', function () {
  it('should add a todo', function () {

    let app = mount(<App/>)

    app.setState({
      value: '123'
    })

    let todoLengthBefore = app.find('.todoItem').length
    // console.log('todoLengthBefore', todoLengthBefore);

    app.find('.add-todo').simulate('click')

    // console.log(app.state());
    let todoLengthAfter = app.find('.todoItem').length;
    // console.log('todoLengthAfter', todoLengthAfter);

    assert.equal(todoLengthAfter, todoLengthBefore + 1 );
  });
});
