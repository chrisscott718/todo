var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// app css
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <h1>Boilerplate3 Project</h1>,
  document.getElementById('app')
);
