import React from 'react';
import './App.css';
import { CssBaseline, Button, Grid, Box, Typography } from '@material-ui/core';
import FilmesApi from './api/FilmesApi';
import Layout from './components/layout/Layout';
import Filmes from './components/ui/Filmes';
import Filme from './components/ui/Filme';
import FilmesSelecionado from './components/ui/FilmesSelecionado';
import Resultados from './components/ui/Resultados'

class App extends React.Component {
  state = {
    filmesLimite: 8,
    filmes: [],
    filmesSelecionados: []
  }
  componentDidMount() {
    const filmesApi = new FilmesApi();
    filmesApi
      .listar()
      .then(response => {
        this.setState({
          filmes: response.data
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
    } else if(o.checked === false) {
      novosFilmesSelecionados = this.state.filmesSelecionados.filter(filme => filme.id !== o.value);
    }
    this.setState({
      filmesSelecionados: novosFilmesSelecionados
    });
  }
  render() {
    return (
      <React.Fragment>
        <Layout>
          <div className="header-campeonatos">
            <Typography variant="h3" component="h1">Campeonato de filmes</Typography>
            <h2>Fase de Seleção</h2>
            <p className="selecione-filmes">Selecione {this.state.filmesLimite} filmes que você deseja que entrem na competição e depois pressione o botão "Gerar Meu Campeonato" para prosseguir.</p>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box textAlign="left">
                <FilmesSelecionado numSelecionados={this.state.filmesSelecionados.length} numTotal={this.state.filmesLimite} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign="right">
                <Button variant="contained" className="btn-gerar-meu-campeonato">
                  Gerar meu campeonato
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Filmes>
            {this.state.filmes.map(filme => {
              return (
                <Filme filme={filme} key={filme.id} onChange={this.handleFilmeChange.bind(this)} bloquearSelecao={this.state.filmesSelecionados.length >= this.state.filmesLimite} />
              )
            })}
          </Filmes>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
