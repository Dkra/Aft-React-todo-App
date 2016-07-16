import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
import { createStore } from 'redux'
import reducers from './reducers'
import $ from 'jquery'

// need to change structure simplified App.js (then may avoid this line)
if ($('.fluid-container').length <= 0) {
  $('body').prepend('<div class="fluid-container"></div>');
}
// console.log(reducers);
// console.log(createStore(reducers));

ReactDOM.render(
  <App store={ createStore(reducers) } />,
  document.querySelector('.fluid-container')
)
