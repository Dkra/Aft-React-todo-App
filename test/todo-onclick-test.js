import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import 'ignore-styles'
import App from '../app/App';

describe('Turning a Todo item to complete', function () {
  it('Turning a Todo item to complete', function () {

    let app = mount(<App/>)

    app.setState({
      value: '123'
    })
    // console.log(app.state());

    app.find('.add-todo').simulate('click')
    let todoItem = app.find('.todoItem').at(0);

    todoItem.simulate('click');

    expect(todoItem.hasClass('isComplete')).to.equal(true);
  });
});
