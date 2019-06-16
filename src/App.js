import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import FilmesPage from './components/pages/FilmesPage';
import ResultadosPage from './components/pages/ResultadosPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilmesApi from './api/FilmesApi';

// import { Link } from 'react-router-dom';
// const LinkResultados = React.forwardRef((props, ref) => (
//   <Link innerRef={ref} to="/resultados/" {...props} />
// ));


class App extends React.Component {
  state = {
    filmesSelecionados: []
  }
  onClickGerarCampeonato(filmesSelecionados) {

    const ids = filmesSelecionados.map(filme => {
      return filme.id;
    });

    const filmesApi = new FilmesApi();
    filmesApi
      .gerarCampeonato(ids)
      .then(filmes => {
        this.setState({
          filmesSelecionados: filmes
        });
      }).catch(error => {
        console.log("ocorreram erros ao tentar gerar o campeonato");
        console.log(error);
        this.setState({
          filmesSelecionados: []
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Route path="/" exact component={props => <FilmesPage {...props} onClickGerarCampeonato={this.onClickGerarCampeonato.bind(this)} />} />
            <Route path="/resultados/" component={props => <ResultadosPage {...props} filmesSelecionados={this.state.filmesSelecionados} />} />
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
