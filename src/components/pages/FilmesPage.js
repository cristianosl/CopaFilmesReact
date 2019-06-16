import React from 'react';
import { Button, Grid, Box } from '@material-ui/core';

import FilmesApi from '../../api/FilmesApi';
import FilmesContainer from '../ui/Filmes/FilmesContainer';
import FilmesItem from '../ui/Filmes/FilmesItem';
import FilmesSelecionado from '../ui/Filmes/FilmesSelecionado';
import HeaderCampeonatos from '../ui/HeaderCampeonatos';
import { Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    redirectResultados: false,
    filmesLimite: 8,
    filmes: [],
    filmesSelecionados: []
  }
  componentDidMount() {
    const filmesApi = new FilmesApi();
    filmesApi
      .listar()
      .then(filmes => {
        this.setState({
          filmes: filmes
        });
      }).catch(error => {
        console.log(error);
      });
  }
  handleFilmeChange(o) {
    // console.log('o.value', o.value);
    // console.log('o.checked', o.checked);
    let novosFilmesSelecionados = this.state.filmesSelecionados;
    // Caso esteja marcado, inclui na lista de filmes
    if (o.checked && this.state.filmesSelecionados.length < this.state.filmesLimite) {
      let filmeSelecionado = this.state.filmes.find(filme => filme.id === o.value);
      // let novosFilmesSelecionados = this.state.filmesSelecionados;
      novosFilmesSelecionados.push(filmeSelecionado)
      this.setState({
        filmesSelecionados: novosFilmesSelecionados
      });

      // Caso contrário, remove
    } else if (o.checked === false) {
      novosFilmesSelecionados = this.state.filmesSelecionados.filter(filme => filme.id !== o.value);
    }
    this.setState({
      filmesSelecionados: novosFilmesSelecionados
    });
  }
  gerarCampeonato () {
    // console.log('gerando campeonato');
    this.props.onClickGerarCampeonato(this.state.filmesSelecionados);
    this.setState({
      redirectResultados: true
    })
  }
  render() {
    if(this.state.redirectResultados) {
      return <Redirect to="/resultados/" />;
    }
    return (
      <div>
        <HeaderCampeonatos titulo="Fase de Seleção">
          <p className="selecione-filmes">Selecione {this.state.filmesLimite} filmes que você deseja que entrem na competição e depois pressione o botão "Gerar Meu Campeonato" para prosseguir.</p>
        </HeaderCampeonatos>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box textAlign="left">
              <FilmesSelecionado numSelecionados={this.state.filmesSelecionados.length} numTotal={this.state.filmesLimite} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box textAlign="right">
              <Button variant="contained" className="btn-gerar-meu-campeonato" onClick={this.gerarCampeonato.bind(this)} disabled={this.state.filmesSelecionados.length < this.state.filmesLimite}>
                Gerar meu campeonato
              </Button>
            </Box>
          </Grid>
        </Grid>

        <FilmesContainer>
          {this.state.filmes.map(filme => {
            return (
              <FilmesItem filme={filme} key={filme.id} onChange={this.handleFilmeChange.bind(this)} bloquearSelecao={this.state.filmesSelecionados.length >= this.state.filmesLimite} />
            )
          })}
        </FilmesContainer>

      </div>
    );
  }
}

export default App;
