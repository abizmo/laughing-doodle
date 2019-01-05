const React = require('react');
const { withStyles } = require('@material-ui/core/styles');
const Toolbar = require('@material-ui/core/Toolbar').default;
const Typography = require('@material-ui/core/Typography').default;

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  }
});

const Header = ({ classes }) => (
  <Toolbar className={ classes.toolbarMain }>
    <Typography component="h2" variant="h5" color="inherit" align="center" className={ classes.toolbarTitle }>
      Biblioteca Personal
    </Typography>
  </Toolbar>
);

module.exports = withStyles(styles)(Header);