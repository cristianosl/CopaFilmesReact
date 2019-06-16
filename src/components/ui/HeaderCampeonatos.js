import React from 'react';
import { Typography } from '@material-ui/core';
export default function headerCampeonatos(props) {
  return (
    <div className="header-campeonatos">
      <Typography variant="h3" component="h1">Campeonato de filmes</Typography>
      <h2>{props.titulo}</h2>
      {props.children}
    </div>
  )
}
