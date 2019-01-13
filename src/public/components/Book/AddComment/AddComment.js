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

const AddComment = ({ classes, bookId, addComment }) => (
  <form className={classes.form} onSubmit={(e) => addComment(e, bookId)}>
    <FormControl
      margin="normal"
      required
      className={classes.formControl}
    >
      <InputLabel htmlFor="comment">Comentario:</InputLabel>
      <Input id="comment" name="comment" autoComplete="comment" autoFocus />
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

module.exports = withStyles(styles)(AddComment);