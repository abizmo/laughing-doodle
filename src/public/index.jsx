const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App/App');

const target = document.getElementById('app');

ReactDOM.render(
  <App />,
  target
);