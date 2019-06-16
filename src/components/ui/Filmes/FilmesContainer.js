import React from 'react';
import { Grid } from '@material-ui/core';

function Filmes(props) {
  return (
    <Grid className="filmes-container" container spacing={3}>
      {props.children}
    </Grid>
  )
}
export default Filmes;