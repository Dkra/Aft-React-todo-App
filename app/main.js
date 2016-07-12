import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import $ from 'jquery'

// need to change structure simplified App.js (then may avoid this line)
if ($('.fluid-container').length <= 0) {
  $('body').prepend('<div class="fluid-container"></div>');
}

ReactDOM.render(
  <App />,
  document.querySelector('.fluid-container')
)
