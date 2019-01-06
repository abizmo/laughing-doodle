const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const App = require('./components/App/App');
const reducer = require('./reducers');

const target = document.getElementById('app');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  target
);