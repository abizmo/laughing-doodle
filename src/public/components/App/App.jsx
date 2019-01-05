const React = require('react');
const Router = require('react-router-dom/BrowserRouter').default;
const Route = require('react-router-dom/Route').default;
const Library = require('../Library/Library');
const Header = require('../Header/Header');
const CssBaseline = require('@material-ui/core/CssBaseline').default;

const styles = {
  container: {
    width: '95%',
    margin: '0 auto'
  }
}

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main style={ styles.container }>
          <Route exact path="/" component={ Library } />
        </main>
      </React.Fragment>
    </Router>
  );
}

module.exports = App;