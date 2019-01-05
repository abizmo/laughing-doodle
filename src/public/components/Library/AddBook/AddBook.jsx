const React = require('react');
const FormControl = require('@material-ui/core/FormControl').default;
const InputLabel = require('@material-ui/core/InputLabel').default;
const Input = require('@material-ui/core/Input').default;
const Button = require('@material-ui/core/Button').default;
const { withStyles } = require('@material-ui/core/styles');

const styles = theme => ({
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex'
  },
  formControl: {
    flex: 3,
    marginRight: theme.spacing.unit * 2
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    flex: 1
  },
});

const AddBook = ({ classes }) => (
  <form className={classes.form}>
    <FormControl 
    margin="normal" 
    required 
    className={ classes.formControl }
    >
      <InputLabel htmlFor="title">Título</InputLabel>
      <Input id="title" name="title" autoComplete="title" autoFocus />
    </FormControl>
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Añadir
    </Button>
  </form>
);

module.exports = withStyles(styles)(AddBook);