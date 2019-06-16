import React from 'react';
import HeaderCampeonatos from '../ui/HeaderCampeonatos';
// import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function ResultadosPage(props){
  let i = 0;
  return (
    <div>
      <HeaderCampeonatos titulo="Resultado Final">
        <p className="selecione-filmes">Veja o resultado final do Campeonato de filmes de forma simples e rápida</p>
      </HeaderCampeonatos>


      {props.filmesSelecionados.map(filme => {
        return (
          <Grid container key={filme.id} className="finalistas">
            <Grid item xs={1} className="finalista posicao">
              {++i}º
            </Grid>
            <Grid item xs={11} className="finalista nome-filme">
              {filme.titulo}
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

export default ResultadosPage;