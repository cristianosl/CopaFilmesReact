import React from 'react';
import PropTypes from "prop-types";
import { Grid, Paper, Checkbox, FormControlLabel } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


class FilmesItem extends React.Component {
  state = {
    checked: false
  }
  handleChange = event => {
    // Verifica se já atingiu o limite
    if(event.target.checked && this.props.bloquearSelecao) return false;
    // Repassa o tratamento do checkbox
    this.props.onChange(event.target);
    this.setState({checked: event.target.checked });
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={3} className="filme-item">
        <Paper className={classes.filmePaper}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleChange}
                value={this.props.filme.id}
                color="primary"
              />
            }
            label={this.props.filme.titulo}
          />
        </Paper>
      </Grid>
    );
  }
}
const styles = theme => ({
  filmePaper: {
    padding: theme.spacing(3, 2),
  }
});

FilmesItem.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FilmesItem);